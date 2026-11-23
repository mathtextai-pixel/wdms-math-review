/*
 * mathcheck.js — reads the math a student types and decides whether it is right.
 *
 * It understands numbers (decimals, fractions, mixed numbers), variables,
 * + − × ÷, exponents and parentheses, and it compares answers by VALUE, so
 * 5(m + c) and 5m + 5c count as the same answer.
 *
 * Works in the browser (window.MathCheck) and in Node (for the tests).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MathCheck = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SUPERSCRIPTS = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
  var VULGAR = { '½': '1/2', '⅓': '1/3', '⅔': '2/3', '¼': '1/4', '¾': '3/4', '⅕': '1/5', '⅖': '2/5', '⅗': '3/5', '⅘': '4/5', '⅙': '1/6', '⅚': '5/6', '⅛': '1/8', '⅜': '3/8', '⅝': '5/8', '⅞': '7/8' };

  function MathError(message) {
    this.name = 'MathError';
    this.message = message;
  }
  MathError.prototype = Object.create(Error.prototype);

  /* ---------- Step 1: tidy up what was typed ---------- */

  function normalize(raw, opts) {
    opts = opts || {};
    var s = String(raw == null ? '' : raw);
    s = s.replace(/[−–—‒]/g, '-'); // minus signs and dashes
    s = s.replace(/[×·•∙⋅✕✖]/g, '*').replace(/÷/g, '/');
    s = s.replace(/[\[{]/g, '(').replace(/[\]}]/g, ')');
    s = s.replace(/\*\*/g, '^');
    s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, function (m) {
      return '^' + m.split('').map(function (c) { return SUPERSCRIPTS[c]; }).join('');
    });
    s = s.replace(/(\d)\s*([½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞])/g, function (m, d, f) { return d + ' ' + VULGAR[f]; });
    s = s.replace(/[½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g, function (f) { return '(' + VULGAR[f] + ')'; });
    s = s.replace(/[$¢%]/g, '');
    s = s.replace(/(\d),(?=\d{3}(\D|$))/g, '$1'); // 1,024 -> 1024
    // mixed numbers: "3 1/2" -> (3+1/2)
    s = s.replace(/(\d+(?:\.\d+)?)\s+(\d+)\s*\/\s*(\d+)/g, '($1+$2/$3)');
    if (opts.numeric) {
      // In a numbers-only answer an "x" between values means "times",
      // and words like "days" or "ft" are just units.
      s = s.replace(/(\d|\))\s*[xX]\s*(?=\d|\()/g, '$1*');
      s = s.replace(/[A-Za-z]+\.?/g, ' ');
    }
    return s.trim();
  }

  /* ---------- Step 2: break it into pieces ---------- */

  function tokenize(s) {
    var tokens = [];
    var i = 0;
    while (i < s.length) {
      var c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      if (/[0-9.]/.test(c)) {
        var j = i;
        while (j < s.length && /[0-9.]/.test(s[j])) j++;
        var text = s.slice(i, j);
        if (!/^(\d+\.?\d*|\.\d+)$/.test(text)) throw new MathError('I can\'t read the number "' + text + '".');
        tokens.push({ k: 'num', v: parseFloat(text), text: text });
        i = j;
        continue;
      }
      if (/[A-Za-z]/.test(c)) { tokens.push({ k: 'var', n: c.toLowerCase() }); i++; continue; }
      if ('+-*/^()'.indexOf(c) >= 0) { tokens.push({ k: c }); i++; continue; }
      if (c === '=') throw new MathError('Leave out the equals sign — just type the answer.');
      throw new MathError('I don\'t understand the symbol "' + c + '".');
    }
    return tokens;
  }

  /* ---------- Step 3: build the math from the pieces ---------- */

  function parseTokens(tokens) {
    var pos = 0;
    function peek() { return tokens[pos]; }
    function take() { return tokens[pos++]; }

    function parseExpr() {
      var node = parseTerm();
      while (peek() && (peek().k === '+' || peek().k === '-')) {
        var op = take().k;
        var right = parseTerm();
        node = { t: op === '+' ? 'add' : 'sub', a: node, b: right };
      }
      return node;
    }

    function parseTerm() {
      var node = parseUnary();
      for (;;) {
        var tk = peek();
        if (!tk) break;
        if (tk.k === '*' || tk.k === '/') {
          take();
          var right = parseUnary();
          node = { t: tk.k === '*' ? 'mul' : 'div', a: node, b: right };
        } else if (tk.k === 'var' || tk.k === '(') {
          // 5m, 5(m + c), mc — multiplication with no sign
          node = { t: 'mul', a: node, b: parsePower(), implicit: true };
        } else if (tk.k === 'num') {
          var prev = tokens[pos - 1];
          if (prev && prev.k === ')') {
            node = { t: 'mul', a: node, b: parsePower(), implicit: true };
          } else if (prev && prev.k === 'var') {
            throw new MathError('To write an exponent use ^ (for example ' + prev.n + '^' + tk.text + '). Put numbers in front of the variable.');
          } else {
            throw new MathError('There are two numbers side by side. Is an operation missing?');
          }
        } else break;
      }
      return node;
    }

    function parseUnary() {
      if (peek() && peek().k === '-') { take(); return { t: 'neg', a: parseUnary() }; }
      if (peek() && peek().k === '+') { take(); return parseUnary(); }
      return parsePower();
    }

    function parsePower() {
      var base = parsePrimary();
      if (peek() && peek().k === '^') {
        take();
        var exp = parseUnary();
        return { t: 'pow', a: base, b: exp };
      }
      return base;
    }

    function parsePrimary() {
      var tk = take();
      if (!tk) throw new MathError('The answer looks unfinished.');
      if (tk.k === 'num') return { t: 'num', v: tk.v, text: tk.text };
      if (tk.k === 'var') return { t: 'var', n: tk.n };
      if (tk.k === '(') {
        var inner = parseExpr();
        var close = take();
        if (!close || close.k !== ')') throw new MathError('A parenthesis is missing its partner.');
        return { t: 'grp', a: inner };
      }
      if (tk.k === ')') throw new MathError('A parenthesis is missing its partner.');
      throw new MathError('The answer looks unfinished.');
    }

    if (!tokens.length) throw new MathError('Type an answer first.');
    var tree = parseExpr();
    if (pos < tokens.length) {
      if (tokens[pos].k === ')') throw new MathError('A parenthesis is missing its partner.');
      throw new MathError('I couldn\'t read the whole answer.');
    }
    return tree;
  }

  function parse(raw, opts) {
    return parseTokens(tokenize(normalize(raw, opts)));
  }

  /* ---------- Working with the math ---------- */

  function evaluate(node, env) {
    switch (node.t) {
      case 'num': return node.v;
      case 'var':
        if (!env || !(node.n in env)) throw new MathError('The variable ' + node.n + ' doesn\'t belong in this answer.');
        return env[node.n];
      case 'grp': return evaluate(node.a, env);
      case 'neg': return -evaluate(node.a, env);
      case 'add': return evaluate(node.a, env) + evaluate(node.b, env);
      case 'sub': return evaluate(node.a, env) - evaluate(node.b, env);
      case 'mul': return evaluate(node.a, env) * evaluate(node.b, env);
      case 'div': return evaluate(node.a, env) / evaluate(node.b, env);
      case 'pow': return Math.pow(evaluate(node.a, env), evaluate(node.b, env));
    }
    throw new MathError('I couldn\'t work that out.');
  }

  function variables(node, found) {
    found = found || {};
    if (node.t === 'var') found[node.n] = true;
    if (node.a) variables(node.a, found);
    if (node.b) variables(node.b, found);
    return Object.keys(found).sort();
  }

  function hasParens(node) {
    if (!node) return false;
    if (node.t === 'grp') return true;
    return hasParens(node.a) || hasParens(node.b);
  }

  // How many terms are separated by + or − at the top level?
  function countTerms(node) {
    if (node.t === 'add' || node.t === 'sub') return countTerms(node.a) + countTerms(node.b);
    return 1;
  }

  function close(a, b) {
    if (!isFinite(a) || !isFinite(b)) return false;
    return Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
  }

  // Fixed, awkward test values so that only truly equivalent expressions match.
  var SAMPLE_VALUES = [1.3719, 2.6183, 0.7391, 3.9127, 5.4413, 1.9071, 4.2337, 0.4673, 6.1259, 2.2051];

  function equivalent(treeA, treeB, names) {
    for (var round = 0; round < 6; round++) {
      var env = {};
      for (var i = 0; i < names.length; i++) env[names[i]] = SAMPLE_VALUES[(round * 3 + i * 7 + round * i) % SAMPLE_VALUES.length] + i * 0.618;
      if (!close(evaluate(treeA, env), evaluate(treeB, env))) return false;
    }
    return true;
  }

  /* ---------- Showing the math nicely (LaTeX for KaTeX) ---------- */

  function formatNumber(node) {
    var text = node.text != null ? node.text : String(node.v);
    var parts = text.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '{,}');
    return parts.join('.');
  }

  function toLatex(node) {
    switch (node.t) {
      case 'num': return formatNumber(node);
      case 'var': return node.n;
      case 'grp': return '\\left(' + toLatex(node.a) + '\\right)';
      case 'neg': return '-' + toLatex(node.a);
      case 'add': return toLatex(node.a) + ' + ' + toLatex(node.b);
      case 'sub': return toLatex(node.a) + ' - ' + toLatex(node.b);
      case 'mul':
        if (node.implicit) return toLatex(node.a) + toLatex(node.b);
        return toLatex(node.a) + ' \\times ' + toLatex(node.b);
      case 'div': return '\\dfrac{' + toLatex(stripGroup(node.a)) + '}{' + toLatex(stripGroup(node.b)) + '}';
      case 'pow': return '{' + toLatex(node.a) + '}^{' + toLatex(stripGroup(node.b)) + '}';
    }
    return '';
  }
  function stripGroup(node) { return node.t === 'grp' ? node.a : node; }

  // LaTeX preview of whatever is typed so far ('' when it can't be read yet).
  function preview(raw, opts) {
    try { return toLatex(parse(raw, opts)); } catch (e) { return ''; }
  }

  /* ---------- The checkers ---------- */

  function result(ok, message, extra) {
    var r = { correct: !!ok, message: message || '' };
    if (extra) for (var key in extra) r[key] = extra[key];
    return r;
  }

  function isBlank(raw) { return !String(raw == null ? '' : raw).trim(); }

  // A single number (decimal, fraction or mixed number). Units and $ are ignored.
  function checkNumber(raw, expected) {
    if (isBlank(raw)) return result(false, 'Type an answer first.', { empty: true });
    var tree;
    try { tree = parse(raw, { numeric: true }); }
    catch (e) { return result(false, e.message || 'I couldn\'t read that number.', { unreadable: true }); }
    var want = evaluate(parse(String(expected), { numeric: true }), {});
    var got;
    try { got = evaluate(tree, {}); } catch (e2) { return result(false, 'Type just a number here.', { unreadable: true }); }
    if (close(got, want)) return result(true, '');
    // Right size, wrong sign: worth pointing out, especially with integers.
    if (want !== 0 && close(got, -want)) {
      return result(false, 'Check the sign. Should your answer be positive or negative?', { signOnly: true });
    }
    return result(false, '');
  }

  /*
   * An algebraic expression.
   *   rules.maxTerms  — the answer must be simplified to at most this many terms
   *   rules.noParens  — the answer must not contain parentheses
   */
  function checkExpression(raw, expected, rules) {
    rules = rules || {};
    if (isBlank(raw)) return result(false, 'Type an answer first.', { empty: true });
    var tree;
    try { tree = parse(raw); }
    catch (e) { return result(false, e.message || 'I couldn\'t read that expression.', { unreadable: true }); }
    var want = parse(expected);
    var wantVars = variables(want);
    var gotVars = variables(tree);
    for (var i = 0; i < gotVars.length; i++) {
      if (wantVars.indexOf(gotVars[i]) < 0) {
        var allowed = wantVars.length ? 'Use ' + listOf(wantVars) + '.' : 'This answer should be just a number.';
        return result(false, 'Check your variables. ' + allowed, { wrongVariable: true });
      }
    }
    if (!equivalent(tree, want, wantVars)) return result(false, '');
    if (rules.noParens && hasParens(tree)) {
      return result(false, 'That is equivalent — nice. Now rewrite it without parentheses.', { almost: true });
    }
    if (rules.maxTerms && countTerms(tree) > rules.maxTerms) {
      return result(false, 'That is equivalent, but it can be simplified more. Combine the like terms.', { almost: true });
    }
    return result(true, '');
  }

  function listOf(names) {
    if (names.length === 1) return 'the variable ' + names[0];
    return 'the variables ' + names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
  }

  function isPrime(n) {
    if (n < 2 || n !== Math.floor(n)) return false;
    for (var d = 2; d * d <= n; d++) if (n % d === 0) return false;
    return true;
  }

  // A prime factorization such as 2 × 2 × 3 × 7 or 2^2 × 3 × 7 (any order).
  function checkFactorization(raw, target) {
    if (isBlank(raw)) return result(false, 'Type an answer first.', { empty: true });
    var tree;
    try { tree = parse(raw, { numeric: true }); }
    catch (e) { return result(false, e.message || 'I couldn\'t read that.', { unreadable: true }); }
    var bases = [];
    var productOnly = true;
    (function walk(node) {
      if (node.t === 'grp') return walk(node.a);
      if (node.t === 'mul') { walk(node.a); walk(node.b); return; }
      if (node.t === 'num') { bases.push(node.v); return; }
      if (node.t === 'pow' && stripGroup(node.a).t === 'num' && stripGroup(node.b).t === 'num') { bases.push(stripGroup(node.a).v); return; }
      productOnly = false;
    })(tree);
    var value;
    try { value = evaluate(tree, {}); } catch (e2) { return result(false, 'Use only numbers and multiplication here.', { unreadable: true }); }
    if (!productOnly) return result(false, 'Write it as a product of prime numbers, like 2 × 3 × 5.', { almost: true });
    if (!close(value, target)) return result(false, 'Multiply your factors back together — they should make ' + target + '.');
    for (var i = 0; i < bases.length; i++) {
      if (!isPrime(bases[i])) {
        if (bases[i] === 1) return result(false, 'Leave out the 1 — it is not a prime number.', { almost: true });
        return result(false, 'That does equal ' + target + ', but ' + bases[i] + ' is not prime. Keep factoring it.', { almost: true });
      }
    }
    return result(true, '');
  }

  return {
    MathError: MathError,
    normalize: normalize,
    parse: parse,
    evaluate: evaluate,
    variables: variables,
    countTerms: countTerms,
    hasParens: hasParens,
    toLatex: toLatex,
    preview: preview,
    checkNumber: checkNumber,
    checkExpression: checkExpression,
    checkFactorization: checkFactorization,
    isPrime: isPrime
  };
});
