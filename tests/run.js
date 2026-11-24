/*
 * Run with:  node tests/run.js
 *
 * 1. Tests the answer checker (assets/js/mathcheck.js).
 * 2. Checks every review file: each problem is well formed and its own
 *    answer key is accepted by the checker.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const MC = require('../assets/js/mathcheck.js');

let passed = 0;
const failures = [];
function ok(condition, label) { if (condition) passed++; else failures.push(label); }

/* ---------- 1. the checker ---------- */

const num = (input, answer) => MC.checkNumber(input, answer).correct;
ok(num('280', '280'), 'plain number');
ok(num('$280', '280'), 'dollar sign');
ok(num('280.00', '280'), 'trailing zeros');
ok(num('1,024', '1024'), 'comma');
ok(num('190,000', '190000'), 'big comma number');
ok(num('24 days', '24'), 'units ignored');
ok(num('11/4', '11/4'), 'fraction');
ok(num('2 3/4', '11/4'), 'mixed number');
ok(num('2.75', '11/4'), 'decimal for fraction');
ok(num('2¾', '11/4'), 'unicode fraction');
ok(num('88.5', '88.50'), 'money without trailing zero');
ok(num('1.9 x 10^5', '190000'), 'x as times in a number');
ok(!num('281', '280'), 'wrong number');
ok(!num('9450', '-9450') && MC.checkNumber('9450', '-9450').signOnly, 'wrong sign is flagged');
ok(!MC.checkNumber('-280', '281').signOnly, 'a different number is not a sign mistake');
ok(!num('2.7', '11/4'), 'close but wrong');
ok(MC.checkNumber('', '5').empty, 'empty number');
ok(MC.checkNumber('2 +', '5').unreadable, 'unfinished number');

const expr = (input, answer, rules) => MC.checkExpression(input, answer, rules);
ok(expr('4y+2', '4y + 2').correct, 'same expression');
ok(expr('2 + 4y', '4y + 2').correct, 'different order');
ok(expr('5p+5b', '5(p + b)').correct, 'distributed form');
ok(expr('5(b+p)', '5(p + b)').correct, 'swapped inside parentheses');
ok(expr('(p+b)5', '5(p + b)').correct, 'number after parentheses');
ok(expr('5 × (p + b)', '5(p + b)').correct, 'times sign');
ok(expr('p+b+p+b+p+b+p+b+p+b', '5(p + b)').correct, 'repeated addition');
ok(!expr('5p+b', '5(p + b)').correct, 'forgot to distribute');
ok(expr('250+.3m', '250 + 0.30m').correct, 'decimal without leading zero');
ok(expr('0.30m + 250', '250 + 0.30m').correct, 'rate first');
ok(expr('250 + 0.30 * M', '250 + 0.30m').correct, 'capital variable');
ok(expr('5.52 + 0.25b', '1.80 + 3.72 + 0.25b').correct, 'combined constants');
ok(expr('b/4 + 5.52', '1.80 + 3.72 + 0.25b').correct, 'divide instead of multiply by decimal');
ok(expr('4/5x + 2.1', '0.8x + 2.1').correct, 'fraction coefficient');
ok(expr('x²', 'x^2').correct, 'superscript exponent');
ok(!expr('x2', 'x^2').correct && expr('x2', 'x^2').unreadable, 'x2 is flagged, not guessed');
ok(expr('4y + 2', '4y + 2', { maxTerms: 2, noParens: true }).correct, 'simplified accepted');
ok(expr('3y + y + 2', '4y + 2', { maxTerms: 2 }).almost, 'unsimplified is "almost"');
ok(expr('2(2y + 1)', '4y + 2', { maxTerms: 2, noParens: true }).almost, 'parentheses are "almost"');
ok(!expr('4y + 3', '4y + 2', { maxTerms: 2 }).correct && !expr('4y + 3', '4y + 2', { maxTerms: 2 }).almost, 'wrong is wrong');
ok(expr('4x + 2', '4y + 2').wrongVariable, 'wrong variable');
ok(expr('y = 4', '4y + 2').unreadable, 'equals sign');
ok(expr('5g+70', '5g + 70', { noParens: true }).correct, 'distributive answer');
ok(expr('5(g+14)', '5g + 70', { noParens: true }).almost, 'original form is "almost"');
ok(!expr('5g+14', '5g + 70', { noParens: true }).correct, 'common mistake rejected');
ok(expr('65x-25', '65x - 25', { maxTerms: 2, noParens: true }).correct, 'subtraction answer');
ok(expr('-25 + 65x', '65x - 25', { maxTerms: 2, noParens: true }).correct, 'leading negative');
ok(!expr('25 - 65x', '65x - 25').correct, 'reversed subtraction');

const fac = (input) => MC.checkFactorization(input, 84); // kept for future reviews
ok(fac('2 x 2 x 3 x 7').correct, 'factorization with x');
ok(fac('7*3*2*2').correct, 'factorization any order');
ok(fac('2^2 × 3 × 7').correct, 'factorization with exponent');
ok(fac('2² · 3 · 7').correct, 'factorization with superscript');
ok(fac('4 x 21').almost, 'not fully factored');
ok(fac('1 x 2 x 2 x 3 x 7').almost, 'includes 1');
ok(!fac('2 x 3 x 7').correct && !fac('2 x 3 x 7').almost, 'wrong product');
ok(fac('84').almost, 'the number itself is not prime');
ok(fac('2 + 2').almost || !fac('2 + 2').correct, 'not a product');

const g = (input) => MC.checkExpression(input, '7(2x + 7)', { gcf: 7 });
ok(g('7(2x+7)').correct && g('(2x + 7)7').correct && g('7 × (7 + 2x)').correct, 'factored with the GCF');
ok(MC.checkExpression('-6(2x - 4 + 3y)', '6(-2x + 4 - 3y)', { gcf: 6 }).correct, 'negative GCF accepted');
ok(g('14x + 49').almost, 'not factored is "almost"');
ok(!MC.checkExpression('2(6x + 9y + 13)', '2(6x + 9y + 13)', { gcf: 3 }).correct, 'wrong factor');
ok(MC.checkExpression('3(4 + 10y)', '6(2 + 5y)', { gcf: 6 }).almost, 'smaller common factor is "almost"');
ok(!g('7(2x + 8)').correct && !g('7(2x + 8)').almost, 'wrong inside the parentheses');
ok(MC.countTerms(MC.parse('3x + 2 - y')) === 3, 'count terms');
ok(MC.countTerms(MC.parse('5(p + b)')) === 1, 'parentheses are one term');
ok(MC.preview('2(x+1)') !== '' && MC.preview('2(') === '', 'preview');

/* ---------- 2. the review files ---------- */

global.window = global;
require('../reviews/manifest.js');
const reviewDir = path.join(__dirname, '..', 'reviews');
for (const file of fs.readdirSync(reviewDir)) {
  if (file !== 'manifest.js' && file.endsWith('.js')) require(path.join(reviewDir, file));
}

function checkAnswerSpec(spec, where) {
  const text = (v) => typeof v === 'string' && v.trim().length > 0;
  switch (spec.type) {
    case 'number':
      ok(MC.checkNumber(spec.answer, spec.answer).correct, where + ': number key');
      break;
    case 'expr':
      ok(MC.checkExpression(spec.answer, spec.answer, spec.rules).correct, where + ': expression key passes its own rules');
      break;
    case 'factor':
      ok(MC.checkFactorization(spec.answer, spec.target).correct, where + ': factorization key');
      break;
    case 'mc':
      ok(Array.isArray(spec.options) && spec.options.length >= 2 && spec.options.every(text), where + ': options');
      ok(Number.isInteger(spec.correct) && spec.correct >= 0 && spec.correct < spec.options.length, where + ': correct index');
      break;
    case 'multi':
      ok(Array.isArray(spec.options) && spec.options.every(text), where + ': options');
      ok(Array.isArray(spec.correct) && spec.correct.length > 0 && spec.correct.every((i) => Number.isInteger(i) && i >= 0 && i < spec.options.length), where + ': correct list');
      ok(new Set(spec.correct).size === spec.correct.length, where + ': no repeated answers');
      break;
    case 'matrix':
      ok(Array.isArray(spec.columns) && spec.columns.length >= 2, where + ': columns');
      ok(spec.rows.every((r) => text(r.label) && Number.isInteger(r.correct) && r.correct >= 0 && r.correct < spec.columns.length), where + ': rows');
      break;
    default:
      ok(false, where + ': unknown type "' + spec.type + '"');
  }
}

// every $ must be paired, and the KaTeX in it must be valid
let katex = null;
try { katex = require(path.join(__dirname, '..', 'assets', 'vendor', 'katex', 'katex.min.js')); } catch (e) { /* optional */ }
function checkText(value, where) {
  const clean = String(value).replace(/\\\$/g, '');
  const pieces = clean.split('$$').join('$').split('$');
  ok(pieces.length % 2 === 1, where + ': unpaired $ in "' + String(value).slice(0, 40) + '"');
  ok((clean.match(/\*\*/g) || []).length % 2 === 0, where + ': unpaired ** in "' + String(value).slice(0, 40) + '"');
  if (katex) {
    for (let i = 1; i < pieces.length; i += 2) {
      try { katex.renderToString(pieces[i], { throwOnError: true }); passed++; }
      catch (e) { failures.push(where + ': bad math "' + pieces[i] + '" — ' + e.message); }
    }
  }
}

for (const entry of WDMS.catalog) {
  const review = WDMS.reviews[entry.id];
  ok(!!review, entry.id + ': review file exists and registers itself');
  if (!review) continue;
  const direct = path.join(__dirname, '..', entry.id, 'index.html');
  ok(fs.existsSync(direct) && fs.readFileSync(direct, 'utf8').includes('review.html?id=' + entry.id), entry.id + ': direct link page ' + entry.id + '/index.html exists and points at this review');
  ok(review.grade === entry.grade && review.title === entry.title, entry.id + ': manifest matches review file');
  ok(review.problems.length === entry.problems, entry.id + ': manifest says ' + entry.problems + ' problems, file has ' + review.problems.length);
  const sectionIds = new Set(review.sections.map((s) => s.id));
  const seen = new Set();
  for (const p of review.problems) {
    const where = entry.id + '/' + p.id;
    ok(!seen.has(p.id), where + ': unique id'); seen.add(p.id);
    ok(sectionIds.has(p.section), where + ': section exists');
    ok(Array.isArray(p.hints) && p.hints.length >= 1, where + ': has hints');
    ok(Array.isArray(p.steps) && p.steps.length >= 2, where + ': has steps');
    checkText(p.prompt, where + ' prompt');
    (p.hints || []).forEach((h) => checkText(h, where + ' hint'));
    (p.steps || []).forEach((s) => checkText(s, where + ' step'));
    (p.options || []).forEach((o) => checkText(o, where + ' option'));
    (p.rows || []).forEach((r) => checkText(r.label, where + ' row'));
    if (p.table) p.table.rows.forEach((row) => { ok(row.length === p.table.headers.length, where + ': table row width'); row.forEach((c) => checkText(c, where + ' table')); });
    if (p.type === 'parts') {
      ok(Array.isArray(p.parts) && p.parts.length >= 2, where + ': parts');
      p.parts.forEach((part) => { checkText(part.prompt, where + ' part ' + part.label); (part.options || []).forEach((o) => checkText(o, where + ' part option')); checkAnswerSpec(part, where + ' part ' + part.label); });
    } else {
      checkAnswerSpec(p, where);
    }
  }
  for (const s of review.sections) ok(review.problems.some((p) => p.section === s.id), entry.id + ': section ' + s.id + ' has problems');
}

/* ---------- 3. the Jeopardy games ---------- */

const gameDir = path.join(__dirname, '..', 'games');
if (fs.existsSync(gameDir)) for (const file of fs.readdirSync(gameDir)) if (file.endsWith('.js')) require(path.join(gameDir, file));

for (const entry of WDMS.catalog.filter((e) => e.jeopardy)) {
  const game = WDMS.games[entry.id];
  const where = entry.id + ' jeopardy';
  ok(!!game, where + ': games/' + entry.id + '.js exists and registers itself');
  if (!game) continue;
  const direct = path.join(__dirname, '..', entry.id + '-jeopardy', 'index.html');
  ok(fs.existsSync(direct) && fs.readFileSync(direct, 'utf8').includes('jeopardy.html?id=' + entry.id), where + ': direct link page exists');
  ok(game.grade === entry.grade, where + ': grade matches the manifest');
  ok(Array.isArray(game.values) && game.values.length === 5, where + ': five point values');
  ok(game.categories.length >= 4 && game.categories.length <= 6, where + ': four to six categories');
  ok(Array.isArray(game.finals) && game.finals.length >= 2, where + ': at least two Final Jeopardy questions');
  const questions = [];
  game.categories.forEach((category) => {
    ok(typeof category.name === 'string' && category.name.length > 0, where + ': category name');
    ok(category.tiles.length === game.values.length, where + ': ' + category.name + ' has one tile per value');
    category.tiles.forEach((options, r) => {
      ok(Array.isArray(options) && options.length >= 2, where + ': ' + category.name + ' ' + game.values[r] + ' has at least two questions');
      options.forEach((q) => questions.push([category.name + ' ' + game.values[r], q]));
    });
  });
  game.finals.forEach((q) => { ok(typeof q.category === 'string' && q.category.length > 0, where + ': final category'); questions.push(['final', q]); });
  const seenQuestions = new Set();
  const reviewPrompts = new Set(((WDMS.reviews[entry.id] || {}).problems || []).map((p) => p.prompt));
  for (const [label, q] of questions) {
    ['q', 'a', 'key'].forEach((field) => ok(typeof q[field] === 'string' && q[field].trim().length > 0, where + ': ' + label + ' has "' + field + '"'));
    ok(Array.isArray(q.steps) && q.steps.length >= 2 && q.steps.length <= 6, where + ': ' + label + ' has 2 to 6 explanation steps');
    checkText(q.q, where + ' ' + label + ' question');
    checkText(q.a, where + ' ' + label + ' answer');
    (q.steps || []).forEach((step) => checkText(step, where + ' ' + label + ' step'));
    ok(!seenQuestions.has(q.q), where + ': ' + label + ' is not a repeat'); seenQuestions.add(q.q);
    ok(!reviewPrompts.has(q.q), where + ': ' + label + ' is not copied from the study review');
    try { MC.parse(q.key); passed++; } catch (e) { failures.push(where + ': ' + label + ' key "' + q.key + '" is not readable math'); }
  }
}

if (failures.length) {
  console.error('FAILED (' + failures.length + ')');
  failures.forEach((f) => console.error('  ✗ ' + f));
  process.exit(1);
}
console.log('All ' + passed + ' checks passed.');
