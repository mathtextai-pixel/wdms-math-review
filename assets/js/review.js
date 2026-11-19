/*
 * review.js — runs one review: the overview, the problems, and the results.
 *
 * Nothing here is saved. All progress lives in memory and is gone when the
 * page is closed or reloaded.
 */
(function () {
  'use strict';

  var el = UI.el;
  var icon = UI.icon;
  var app = document.getElementById('app');
  var review = null;
  var sectionById = {};
  var sectionNumber = {};
  var problemById = {};
  var mastered = {};   // problems answered correctly at any point this visit
  var run = null;      // the set of problems being worked on right now

  var PRAISE = ['Correct!', 'Nice work!', 'You got it!', 'That\'s right!', 'Exactly right!', 'Well done!'];
  var coarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

  /* ======================================================================
     Loading
     ====================================================================== */

  function reviewId() {
    var match = /[?&]id=([a-z0-9-]+)/i.exec(location.search);
    return match ? match[1] : null;
  }

  function showNotice(title, text) {
    app.innerHTML = '';
    app.appendChild(el('div', { class: 'notice' },
      el('h1', { text: title }),
      el('p', { text: text }),
      el('a', { class: 'btn btn-primary', href: 'index.html' }, icon('home'), 'Go to all reviews')
    ));
  }

  function load() {
    var id = reviewId();
    var listed = id && WDMS.catalog.some(function (entry) { return entry.id === id; });
    if (!listed) {
      showNotice('We couldn\'t find that review', 'The link may be old or mistyped. Pick a review from the home page.');
      return;
    }
    var script = document.createElement('script');
    script.src = 'reviews/' + id + '.js';
    script.onload = function () {
      review = WDMS.reviews[id];
      if (!review) { showNotice('This review didn\'t load', 'Please refresh the page to try again.'); return; }
      review.sections.forEach(function (section, i) { sectionById[section.id] = section; sectionNumber[section.id] = i + 1; });
      review.problems.forEach(function (problem) { problemById[problem.id] = problem; });
      document.title = review.title + ' · Grade ' + review.grade + ' · WDMS Math Review';
      renderIntro();
    };
    script.onerror = function () { showNotice('This review didn\'t load', 'Check your internet connection and refresh the page.'); };
    document.head.appendChild(script);
  }

  function setView(node) {
    app.innerHTML = '';
    app.appendChild(node);
    window.scrollTo(0, 0);
  }

  function plural(count, word) { return count + ' ' + word + (count === 1 ? '' : 's'); }

  /* ======================================================================
     Overview screen
     ====================================================================== */

  function renderIntro() {
    run = null;
    var total = review.problems.length;

    var skillCards = review.sections.map(function (section) {
      var problems = review.problems.filter(function (p) { return p.section === section.id; });
      var doneCount = problems.filter(function (p) { return mastered[p.id]; }).length;
      var meta = 'Lesson ' + section.lesson + ' · ' + plural(problems.length, 'problem');
      if (doneCount) meta += ' · ' + doneCount + ' correct';
      return el('button', {
        type: 'button',
        class: 'skill-card' + (doneCount === problems.length ? ' is-done' : ''),
        onclick: function () { startRun(problems.map(function (p) { return p.id; }), section.title); }
      },
        el('span', { class: 'skill-num' }, doneCount === problems.length ? icon('check') : String(sectionNumber[section.id])),
        el('span', { class: 'skill-body' },
          el('span', { class: 'skill-title', style: 'display:block', text: section.title }),
          el('span', { class: 'skill-meta', style: 'display:block', text: meta })
        ),
        icon('arrowRight')
      );
    });

    setView(el('div', null,
      el('section', { class: 'intro-card' },
        el('span', { class: 'eyebrow' }, 'Grade ' + review.grade + ' · Test review'),
        el('h1', { text: review.title }),
        el('p', { class: 'intro-sub', text: review.subtitle }),
        el('div', { class: 'stat-row' },
          el('span', { class: 'stat' }, icon('list'), plural(total, 'problem')),
          el('span', { class: 'stat' }, icon('target'), plural(review.sections.length, 'skill') + ' from the test'),
          el('span', { class: 'stat' }, icon('shuffle'), 'New order every time')
        ),
        el('div', { class: 'intro-actions' },
          el('button', {
            type: 'button', class: 'btn btn-primary btn-lg', id: 'start-full',
            onclick: function () { startRun(review.problems.map(function (p) { return p.id; }), 'Full review'); }
          }, 'Start the full review', icon('arrowRight'))
        ),
        el('p', { class: 'intro-note', text: 'Check each answer as you go. Use a hint if you get stuck, or show the steps to see how it\'s solved. Nothing is saved, so you can practice as many times as you like.' })
      ),
      el('div', { class: 'section-heading' },
        el('h2', { text: 'Or practice one skill' }),
        el('span', { text: 'In the same order as the test' })
      ),
      el('div', { class: 'skill-grid' }, skillCards)
    ));
  }

  /* ======================================================================
     Running a set of problems
     ====================================================================== */

  function startRun(ids, label) {
    run = {
      label: label,
      order: UI.shuffle(ids),
      index: 0,
      status: {},  // id -> { state: 'new' | 'tried' | 'correct' | 'revealed', attempts, firstTry }
      views: {}    // id -> built problem view (kept so going back shows your work)
    };
    run.order.forEach(function (id) { run.status[id] = { state: 'new', attempts: 0, firstTry: false }; });
    renderRunShell();
    showProblem(0);
  }

  var shell = null;

  function renderRunShell() {
    shell = {
      count: el('div', { class: 'run-count' }),
      fill: el('div', { class: 'progress-fill' }),
      dots: el('ol', { class: 'dots', 'aria-label': 'Jump to a problem' }),
      slot: el('div'),
      back: el('button', { type: 'button', class: 'btn btn-ghost', onclick: function () { showProblem(run.index - 1); } }, icon('arrowLeft'), 'Back'),
      skip: el('button', { type: 'button', class: 'btn btn-ghost', onclick: function () { advance(); } })
    };
    shell.dotButtons = run.order.map(function (id, i) {
      var button = el('button', { type: 'button', class: 'dot-btn', onclick: function () { showProblem(i); } }, String(i + 1));
      shell.dots.appendChild(el('li', null, button));
      return button;
    });

    setView(el('div', null,
      el('div', { class: 'run-top' },
        el('button', { type: 'button', class: 'btn btn-ghost btn-sm', onclick: renderIntro, style: 'margin-left:-10px' }, icon('arrowLeft'), 'Overview'),
        el('div', { class: 'run-title', text: run.label }),
        shell.count
      ),
      el('div', { class: 'progress', role: 'progressbar', 'aria-label': 'Problems finished', 'aria-valuemin': '0', 'aria-valuemax': String(run.order.length) }, shell.fill),
      shell.dots,
      shell.slot,
      el('div', { class: 'run-nav' }, shell.back, shell.skip)
    ));
  }

  function finishedCount() {
    return run.order.filter(function (id) { var s = run.status[id].state; return s === 'correct' || s === 'revealed'; }).length;
  }

  function updateShell() {
    var total = run.order.length;
    var done = finishedCount();
    shell.count.innerHTML = 'Problem <b>' + (run.index + 1) + '</b> of ' + total;
    shell.fill.style.width = (done / total * 100) + '%';
    shell.fill.parentNode.setAttribute('aria-valuenow', String(done));
    shell.dotButtons.forEach(function (button, i) {
      var state = run.status[run.order[i]].state;
      button.className = 'dot-btn' + (state !== 'new' ? ' is-' + state : '') + (i === run.index ? ' is-current' : '');
      var words = { new: 'not started', tried: 'tried', correct: 'correct', revealed: 'steps shown' }[state];
      button.setAttribute('aria-label', 'Problem ' + (i + 1) + ', ' + words);
      if (i === run.index) button.setAttribute('aria-current', 'true'); else button.removeAttribute('aria-current');
    });
    // on phones the row of numbers scrolls sideways: keep the current one in view
    var current = shell.dotButtons[run.index].parentNode;
    shell.dots.scrollLeft = current.offsetLeft - shell.dots.offsetLeft - shell.dots.clientWidth / 2 + current.offsetWidth / 2;
    shell.back.disabled = run.index === 0;
    var isLast = run.index === total - 1;
    var state = run.status[run.order[run.index]].state;
    var settled = state === 'correct' || state === 'revealed';
    shell.skip.innerHTML = '';
    shell.skip.appendChild(document.createTextNode(isLast ? 'Finish' : (settled ? 'Next' : 'Skip for now')));
    shell.skip.appendChild(icon('arrowRight'));
  }

  function showProblem(index) {
    if (index < 0 || index >= run.order.length) return;
    run.index = index;
    var id = run.order[index];
    if (!run.views[id]) run.views[id] = buildProblemView(problemById[id]);
    shell.slot.innerHTML = '';
    shell.slot.appendChild(run.views[id].node);
    updateShell();
    window.scrollTo(0, 0);
    if (!coarsePointer) run.views[id].focus();
  }

  function advance() {
    if (run.index < run.order.length - 1) showProblem(run.index + 1);
    else renderDone();
  }

  /* ======================================================================
     One problem
     ====================================================================== */

  function buildProblemView(problem) {
    var status = run.status[problem.id];
    var section = sectionById[problem.section];
    var widget = buildWidget(problem);
    var hintsShown = 0;

    var feedback = el('div', { 'aria-live': 'polite' });
    var hintBox = el('div');
    var stepsBox = el('div');

    var checkButton = el('button', { type: 'button', class: 'btn btn-primary', onclick: check }, 'Check answer');
    var nextButton = el('button', { type: 'button', class: 'btn btn-dark', hidden: true, onclick: advance });
    var hintButton = el('button', { type: 'button', class: 'btn btn-outline', onclick: showHint }, icon('bulb'), 'Hint');
    var stepsButton = el('button', { type: 'button', class: 'btn btn-ghost', onclick: showSteps }, icon('eye'), 'Show steps');

    var body = el('div', { class: 'problem-body' }, el('div', { class: 'prompt', html: UI.rich(problem.prompt) }));
    if (problem.table) body.appendChild(buildTable(problem.table));
    if (problem.image) {
      body.appendChild(el('figure', { class: 'figure' }, el('img', { src: problem.image.src, alt: problem.image.alt || '', loading: 'lazy' })));
    }

    var node = el('article', { class: 'problem-card' },
      el('header', { class: 'problem-head' },
        el('span', { class: 'pill' }, 'Skill ' + sectionNumber[section.id]),
        el('span', { class: 'problem-skill', text: section.title }),
        el('span', { class: 'problem-lesson', text: 'Lesson ' + section.lesson })
      ),
      body,
      el('div', { class: 'answer' }, widget.node),
      feedback, hintBox, stepsBox,
      el('div', { class: 'actions' }, checkButton, nextButton, hintButton, el('span', { class: 'spacer' }), stepsButton)
    );

    node.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' || event.target.tagName !== 'INPUT') return;
      event.preventDefault();
      if (!checkButton.hidden) check(); else advance();
    });

    function setFeedback(kind, title, text) {
      feedback.innerHTML = '';
      if (!kind) return;
      var glyph = { right: 'check', wrong: 'x', almost: 'star', info: 'bulb' }[kind];
      feedback.appendChild(el('div', { class: 'feedback is-' + kind },
        el('span', { class: 'feedback-icon' }, icon(glyph)),
        el('div', null,
          el('div', { class: 'feedback-title', text: title }),
          text ? el('div', { class: 'feedback-text', html: UI.inline(text) }) : null
        )
      ));
    }

    function settle() {
      widget.lock();
      checkButton.hidden = true;
      nextButton.hidden = false;
      nextButton.innerHTML = '';
      var isLast = run.index === run.order.length - 1;
      nextButton.appendChild(document.createTextNode(isLast ? 'See my results' : 'Next problem'));
      nextButton.appendChild(icon('arrowRight'));
      hintButton.hidden = true;
      updateShell();
    }

    function check() {
      if (status.state === 'correct' || status.state === 'revealed') return;
      var outcome = widget.check();
      if (outcome.empty) { setFeedback('info', outcome.message || 'Choose or type an answer first.'); return; }
      if (outcome.unreadable) { setFeedback('info', 'I couldn\'t read that answer', outcome.message); return; }

      if (outcome.correct) {
        status.firstTry = status.attempts === 0 && hintsShown === 0;
        status.state = 'correct';
        mastered[problem.id] = true;
        var praise = PRAISE[Math.floor(Math.random() * PRAISE.length)];
        var note = status.firstTry ? 'First try, no hints.' : (status.attempts > 0 ? 'You stuck with it and figured it out.' : '');
        setFeedback('right', praise, note);
        settle();
        if (!coarsePointer) nextButton.focus();
        celebrate(status.firstTry ? 22 : 12);
        return;
      }

      status.attempts += 1;
      status.state = 'tried';
      if (outcome.almost) {
        setFeedback('almost', 'So close!', outcome.message);
      } else {
        var nudge = outcome.message || 'Look over your work and try again.';
        if (status.attempts >= 2 && hintsShown < problem.hints.length) nudge += ' A hint might help.';
        else if (status.attempts >= 3) nudge += ' You can also show the steps to see how it\'s solved.';
        setFeedback('wrong', 'Not quite yet', nudge);
      }
      updateShell();
    }

    function showHint() {
      if (hintsShown >= problem.hints.length) return;
      hintsShown += 1;
      hintBox.innerHTML = '';
      var list = el('ol', { class: 'help-list' });
      for (var i = 0; i < hintsShown; i++) list.appendChild(el('li', { html: UI.inline(problem.hints[i]) }));
      hintBox.appendChild(el('div', { class: 'help' },
        el('div', { class: 'help-head' }, icon('bulb'), 'Hint ' + hintsShown + ' of ' + problem.hints.length),
        list
      ));
      if (hintsShown >= problem.hints.length) {
        hintButton.disabled = true;
        hintButton.lastChild.textContent = 'No more hints';
      } else {
        hintButton.lastChild.textContent = 'Another hint';
      }
    }

    function showSteps() {
      var list = el('ol', { class: 'steps' });
      problem.steps.forEach(function (step) {
        list.appendChild(el('li', { class: /^\*\*Answer/.test(step) ? 'is-answer' : null, html: UI.inline(step) }));
      });
      stepsBox.innerHTML = '';
      stepsBox.appendChild(el('div', { class: 'help is-steps' },
        el('div', { class: 'help-head' }, icon('eye'), 'How to solve it'),
        list
      ));
      stepsButton.hidden = true;
      if (status.state !== 'correct') {
        status.state = 'revealed';
        widget.reveal();
        setFeedback('info', 'Here are the steps', 'Read through them, then try this one again later from the results page.');
        settle();
      }
    }

    return { node: node, focus: function () { widget.focus(); } };
  }

  function buildTable(table) {
    var head = el('tr', null, table.headers.map(function (h) { return el('th', { scope: 'col', html: UI.inline(h) }); }));
    var rows = table.rows.map(function (row) {
      return el('tr', null, row.map(function (cell) { return el('td', { html: UI.inline(cell) }); }));
    });
    return el('div', { class: 'data-table-wrap' },
      el('table', { class: 'data-table' },
        table.caption ? el('caption', { text: table.caption }) : null,
        el('thead', null, head),
        el('tbody', null, rows)
      )
    );
  }

  /* ======================================================================
     Answer widgets
     Each one returns { node, check(), reveal(), lock(), focus() }.
     check() returns { correct, message, empty?, unreadable?, almost? }.
     ====================================================================== */

  function buildWidget(spec, compact) {
    switch (spec.type) {
      case 'number':
      case 'expr':
      case 'factor': return textWidget(spec, compact);
      case 'mc': return choiceWidget(spec, false);
      case 'multi': return choiceWidget(spec, true);
      case 'matrix': return matrixWidget(spec);
      case 'parts': return partsWidget(spec);
    }
    throw new Error('Unknown problem type: ' + spec.type);
  }

  /* ----- typed answers: number, expression, prime factorization ----- */

  function textWidget(spec, compact) {
    var numeric = spec.type !== 'expr';
    var input = el('input', {
      type: 'text', inputmode: 'text', autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false',
      placeholder: spec.type === 'expr' ? 'Type an expression' : (spec.type === 'factor' ? 'Example: 2 x 3 x 5' : 'Type your answer'),
      'aria-label': 'Your answer'
    });
    var field = el('div', { class: 'field' },
      spec.prefix ? el('span', { class: 'affix affix-pre', text: spec.prefix }) : null,
      input,
      spec.unit ? el('span', { class: 'affix affix-post', text: spec.unit }) : null
    );
    var previewNode = el('div', { class: 'preview', 'aria-hidden': 'true' });

    function insert(text) {
      if (input.disabled) return;
      var start = input.selectionStart == null ? input.value.length : input.selectionStart;
      var end = input.selectionEnd == null ? input.value.length : input.selectionEnd;
      input.value = input.value.slice(0, start) + text + input.value.slice(end);
      input.focus();
      var caret = start + text.length;
      try { input.setSelectionRange(caret, caret); } catch (e) { /* older browsers */ }
      refresh();
    }

    var keyDefs = spec.type === 'expr'
      ? [['^', 'exponent'], ['(', ''], [')', ''], ['×', ''], ['÷', ''], ['/', 'fraction']]
      : spec.type === 'factor' ? [['×', ''], ['^', 'exponent']] : [];
    var keyButtons = keyDefs.map(function (def) {
      return el('button', { type: 'button', class: 'key', 'aria-label': 'Insert ' + (def[1] || def[0]), onclick: function () { insert(def[0]); } },
        def[0], def[1] ? el('small', { text: def[1] }) : null);
    });
    var keys = keyButtons.length ? el('div', { class: 'keys' }, keyButtons) : null;

    function refresh() {
      field.classList.remove('is-right', 'is-wrong', 'is-almost');
      var raw = input.value;
      previewNode.innerHTML = '';
      // Only show the preview when it adds something (exponents, fractions, variables...).
      if (!raw.trim() || /^[\s$]*[\d.,]+[\s]*$/.test(raw)) return;
      var tex = MathCheck.preview(raw, { numeric: numeric });
      if (!tex) return;
      previewNode.appendChild(el('span', { text: 'Reads as' }));
      previewNode.appendChild(el('span', { html: UI.math(tex, false) }));
    }
    input.addEventListener('input', refresh);

    function check() {
      var outcome;
      if (spec.type === 'expr') outcome = MathCheck.checkExpression(input.value, spec.answer, spec.rules);
      else if (spec.type === 'factor') outcome = MathCheck.checkFactorization(input.value, spec.target);
      else outcome = MathCheck.checkNumber(input.value, spec.answer);
      field.classList.remove('is-right', 'is-wrong', 'is-almost');
      if (outcome.correct) field.classList.add('is-right');
      else if (outcome.almost) field.classList.add('is-almost');
      else if (!outcome.empty && !outcome.unreadable) field.classList.add('is-wrong');
      return outcome;
    }

    function lock() {
      input.disabled = true;
      keyButtons.forEach(function (key) { key.disabled = true; });
      if (keys) keys.hidden = true;
    }

    return {
      node: el('div', null, compact ? null : el('span', { class: 'answer-label', text: 'Your answer' }), field, keys, previewNode),
      check: check,
      reveal: function () { /* the steps show the answer; leave what was typed */ },
      lock: lock,
      focus: function () { input.focus(); },
      isLocked: function () { return input.disabled; }
    };
  }

  /* ----- pick one (mc) or pick all that apply (multi) ----- */

  function choiceWidget(spec, many) {
    var selected = {};
    var locked = false;
    var buttons = spec.options.map(function (option, i) {
      var tag = el('span', { class: 'choice-tag' });
      var button = el('button', {
        type: 'button', class: 'choice ' + (many ? 'is-check' : 'is-radio'),
        role: many ? 'checkbox' : 'radio', 'aria-checked': 'false',
        onclick: function () { toggle(i); }
      },
        el('span', { class: 'mark' }, icon('check')),
        el('span', { class: 'choice-text', html: UI.inline(option) }),
        tag
      );
      button._tag = tag;
      return button;
    });

    function clearMarks() {
      buttons.forEach(function (button) { button.classList.remove('is-right', 'is-wrong', 'is-missed'); button._tag.textContent = ''; });
    }

    function toggle(i) {
      if (locked) return;
      clearMarks();
      if (many) selected[i] = !selected[i];
      else { selected = {}; selected[i] = true; }
      buttons.forEach(function (button, index) { button.setAttribute('aria-checked', selected[index] ? 'true' : 'false'); });
    }

    function picked() { return Object.keys(selected).filter(function (k) { return selected[k]; }).map(Number); }
    function correctList() { return many ? spec.correct : [spec.correct]; }

    function check() {
      var mine = picked();
      if (!mine.length) return { correct: false, empty: true, message: many ? 'Select every choice that fits.' : 'Choose an answer first.' };
      var want = correctList();
      var hits = mine.filter(function (i) { return want.indexOf(i) >= 0; }).length;
      var extras = mine.length - hits;
      if (hits === want.length && extras === 0) {
        mine.forEach(function (i) { buttons[i].classList.add('is-right'); });
        return { correct: true, message: '' };
      }
      if (!many) {
        buttons[mine[0]].classList.add('is-wrong');
        return { correct: false, message: 'That choice isn\'t it. Try another one.' };
      }
      var message;
      if (extras === 0) message = 'Everything you picked is right, but there ' + (want.length - hits === 1 ? 'is 1 more' : 'are ' + (want.length - hits) + ' more') + ' to find.';
      else if (hits === 0) message = 'None of those match yet. Test each choice one at a time.';
      else message = 'You have ' + hits + ' right, and ' + extras + ' that ' + (extras === 1 ? 'doesn\'t' : 'don\'t') + ' belong.';
      return { correct: false, message: message };
    }

    function reveal() {
      var want = correctList();
      clearMarks();
      buttons.forEach(function (button, i) {
        var isAnswer = want.indexOf(i) >= 0;
        if (isAnswer && selected[i]) { button.classList.add('is-right'); }
        else if (isAnswer) { button.classList.add('is-missed'); button._tag.textContent = 'Answer'; }
        else if (selected[i]) { button.classList.add('is-wrong'); }
      });
    }

    function lock() {
      locked = true;
      buttons.forEach(function (button) { button.disabled = true; });
    }

    return {
      node: el('div', null,
        el('span', { class: 'answer-label', text: many ? 'Select all that apply' : 'Choose one' }),
        el('div', { class: 'choices', role: many ? 'group' : 'radiogroup' }, buttons)
      ),
      check: check, reveal: reveal, lock: lock,
      focus: function () { /* no text box to focus */ },
      isLocked: function () { return locked; }
    };
  }

  /* ----- one choice in every row ----- */

  function matrixWidget(spec) {
    var chosen = spec.rows.map(function () { return null; });
    var locked = false;
    var rowNodes = [];
    var cells = spec.rows.map(function (row, r) {
      return spec.columns.map(function (column, c) {
        return el('button', {
          type: 'button', class: 'cell', role: 'radio', 'aria-checked': 'false',
          'aria-label': column,
          onclick: function () { choose(r, c); }
        });
      });
    });

    function choose(r, c) {
      if (locked) return;
      chosen[r] = c;
      rowNodes[r].classList.remove('is-right', 'is-wrong');
      cells[r].forEach(function (cell, index) { cell.setAttribute('aria-checked', index === c ? 'true' : 'false'); });
    }

    var table = el('table', { class: 'matrix' },
      el('thead', null, el('tr', null,
        el('th', { scope: 'col' }, el('span', { class: 'sr-only', text: 'Item' })),
        spec.columns.map(function (column) { return el('th', { scope: 'col', html: UI.inline(column) }); })
      )),
      el('tbody', null, spec.rows.map(function (row, r) {
        var tr = el('tr', { role: 'radiogroup' },
          el('td', { class: 'row-label', html: UI.inline(row.label) }),
          cells[r].map(function (cell) { return el('td', null, cell); })
        );
        rowNodes.push(tr);
        return tr;
      }))
    );

    function check() {
      if (chosen.some(function (c) { return c === null; })) return { correct: false, empty: true, message: 'Choose an answer in every row.' };
      var right = 0;
      spec.rows.forEach(function (row, r) {
        var ok = chosen[r] === row.correct;
        if (ok) right += 1;
        rowNodes[r].classList.toggle('is-right', ok);
        rowNodes[r].classList.toggle('is-wrong', !ok);
      });
      if (right === spec.rows.length) return { correct: true, message: '' };
      return { correct: false, message: right + ' of ' + spec.rows.length + ' rows are right. Fix the rows marked in red.' };
    }

    function reveal() {
      spec.rows.forEach(function (row, r) {
        var ok = chosen[r] === row.correct;
        rowNodes[r].classList.toggle('is-right', ok);
        rowNodes[r].classList.toggle('is-wrong', !ok && chosen[r] !== null);
        cells[r][row.correct].classList.add('is-answer');
      });
    }

    function lock() {
      locked = true;
      cells.forEach(function (row) { row.forEach(function (cell) { cell.disabled = true; }); });
    }

    return {
      node: el('div', null,
        el('span', { class: 'answer-label', text: 'Choose one in each row' }),
        el('div', { class: 'matrix-wrap' }, table)
      ),
      check: check, reveal: reveal, lock: lock,
      focus: function () {},
      isLocked: function () { return locked; }
    };
  }

  /* ----- Part A / Part B / ... ----- */

  function partsWidget(spec) {
    var parts = spec.parts.map(function (part) {
      var widget = buildWidget(part, true);
      // inside a part, the sub-widget's own label is not needed
      var label = widget.node.querySelector('.answer-label');
      if (label) label.parentNode.removeChild(label);
      var node = el('div', { class: 'part' },
        el('div', { class: 'part-head' },
          el('span', { class: 'part-badge', text: 'Part ' + part.label }),
          el('div', { class: 'part-prompt', html: UI.inline(part.prompt) }),
          el('span', { class: 'part-status' }, icon('check'))
        ),
        widget.node
      );
      return { spec: part, widget: widget, node: node, done: false };
    });

    function mark(part, ok) {
      part.node.classList.toggle('is-right', ok);
      part.node.classList.toggle('is-wrong', !ok);
      var status = part.node.querySelector('.part-status');
      status.innerHTML = '';
      status.appendChild(icon(ok ? 'check' : 'x'));
    }

    function check() {
      var outcomes = parts.map(function (part) { return part.done ? { correct: true } : part.widget.check(); });
      var blank = [];
      var unreadable = null;
      outcomes.forEach(function (outcome, i) {
        if (outcome.empty) blank.push(parts[i].spec.label);
        else if (outcome.unreadable && !unreadable) unreadable = { label: parts[i].spec.label, message: outcome.message };
      });
      if (blank.length) return { correct: false, empty: true, message: 'Answer Part ' + blank.join(' and Part ') + ' too, then check.' };
      if (unreadable) return { correct: false, unreadable: true, message: 'Part ' + unreadable.label + ': ' + unreadable.message };

      var wrong = [];
      var almost = null;
      outcomes.forEach(function (outcome, i) {
        mark(parts[i], outcome.correct);
        if (outcome.correct) {
          if (!parts[i].done) { parts[i].done = true; parts[i].widget.lock(); }
        } else {
          wrong.push(parts[i].spec.label);
          if (outcome.almost && !almost) almost = 'Part ' + parts[i].spec.label + ': ' + outcome.message;
        }
      });
      if (!wrong.length) return { correct: true, message: '' };
      if (almost && wrong.length === 1) return { correct: false, almost: true, message: almost };
      var keep = parts.length - wrong.length;
      var message = 'Part ' + wrong.join(' and Part ') + (wrong.length === 1 ? ' needs' : ' need') + ' another look.';
      if (keep > 0) message = (keep === 1 ? 'One part is right. ' : keep + ' parts are right. ') + message;
      return { correct: false, message: message };
    }

    return {
      node: el('div', { class: 'parts' }, parts.map(function (part) { return part.node; })),
      check: check,
      reveal: function () { parts.forEach(function (part) { part.widget.reveal(); }); },
      lock: function () { parts.forEach(function (part) { part.widget.lock(); }); },
      focus: function () { parts[0].widget.focus(); },
      isLocked: function () { return parts.every(function (part) { return part.widget.isLocked(); }); }
    };
  }

  /* ======================================================================
     Results screen
     ====================================================================== */

  function renderDone() {
    var total = run.order.length;
    var correctIds = run.order.filter(function (id) { return run.status[id].state === 'correct'; });
    var missedIds = run.order.filter(function (id) { return run.status[id].state !== 'correct'; });
    var untouched = run.order.filter(function (id) { return run.status[id].state === 'new'; });
    var firstTry = run.order.filter(function (id) { return run.status[id].firstTry; }).length;
    var score = correctIds.length;
    var percent = total ? score / total : 0;

    var heading, lead;
    if (untouched.length === total) {
      heading = 'Ready when you are';
      lead = 'You haven\'t answered any problems yet. Jump back in whenever you like.';
    } else if (percent === 1) {
      heading = 'A perfect review!';
      lead = 'You answered every problem correctly' + (firstTry === total ? ', all on the first try' : '') + '. You\'re ready for the test.';
    } else if (percent >= 0.8) {
      heading = 'Great work!';
      lead = 'You\'re in good shape. Practice the few you missed and you\'ll be ready.';
    } else if (percent >= 0.5) {
      heading = 'Good progress';
      lead = 'You\'ve got a solid start. Go back through the ones you missed to lock them in.';
    } else {
      heading = 'Keep practicing';
      lead = 'Every problem you work through makes the next one easier. Try the missed ones again and use the hints.';
    }

    var radius = 52;
    var circumference = 2 * Math.PI * radius;
    var ring = el('div', { class: 'ring', role: 'img', 'aria-label': score + ' of ' + total + ' correct' });
    ring.innerHTML =
      '<svg viewBox="0 0 120 120"><circle class="ring-track" cx="60" cy="60" r="' + radius + '"/>' +
      '<circle class="ring-fill" cx="60" cy="60" r="' + radius + '" stroke-dasharray="' + circumference + '" stroke-dashoffset="' + circumference + '"/></svg>' +
      '<div class="ring-label"><b>' + score + '</b><span>of ' + total + ' correct</span></div>';

    var actions = el('div', { class: 'done-actions' });
    if (untouched.length && untouched.length < total) {
      actions.appendChild(el('button', {
        type: 'button', class: 'btn btn-primary btn-lg',
        onclick: function () { renderRunShell(); showProblem(run.order.indexOf(untouched[0])); }
      }, 'Finish the ' + plural(untouched.length, 'problem') + ' I skipped', icon('arrowRight')));
    }
    if (missedIds.length && untouched.length < total) {
      actions.appendChild(el('button', {
        type: 'button', class: 'btn ' + (actions.children.length ? 'btn-outline' : 'btn-primary') + ' btn-lg',
        onclick: function () { startRun(missedIds, 'Missed problems'); }
      }, icon('target'), 'Practice the ' + (missedIds.length === 1 ? 'one' : missedIds.length) + ' I missed'));
    }
    actions.appendChild(el('button', {
      type: 'button', class: 'btn ' + (actions.children.length ? 'btn-outline' : 'btn-primary') + ' btn-lg',
      onclick: function () { startRun(review.problems.map(function (p) { return p.id; }), 'Full review'); }
    }, icon('refresh'), 'Start the full review again'));
    actions.appendChild(el('button', { type: 'button', class: 'btn btn-ghost btn-lg', onclick: renderIntro }, 'Back to overview'));

    var rows = review.sections.map(function (section) {
      var ids = run.order.filter(function (id) { return problemById[id].section === section.id; });
      if (!ids.length) return null;
      var right = ids.filter(function (id) { return run.status[id].state === 'correct'; }).length;
      var bar = el('i', { class: right / ids.length < 0.6 ? 'is-low' : null });
      bar.style.width = (right / ids.length * 100) + '%';
      return el('div', { class: 'break-row' },
        el('div', { class: 'break-name', text: section.title }),
        el('div', { class: 'break-bar' }, bar),
        el('div', { class: 'break-score', text: right + ' / ' + ids.length })
      );
    });

    setView(el('div', null,
      el('section', { class: 'done-card' },
        ring,
        el('h1', { text: heading }),
        el('p', { class: 'lead', text: lead }),
        actions
      ),
      el('div', { class: 'section-heading' },
        el('h2', { text: 'How you did by skill' }),
        firstTry ? el('span', { text: firstTry + ' on the first try' }) : null
      ),
      el('div', { class: 'breakdown' }, rows)
    ));

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        ring.querySelector('.ring-fill').style.strokeDashoffset = String(circumference * (1 - percent));
      });
    });
    if (percent >= 0.8 && untouched.length < total) celebrate(60);
  }

  /* ======================================================================
     A little celebration
     ====================================================================== */

  function celebrate(pieces) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var colors = ['#0e4507', '#2a7d20', '#101310', '#7fb873', '#c9e0c4', '#4a524b'];
    var layer = el('div', { class: 'confetti', 'aria-hidden': 'true' });
    for (var i = 0; i < pieces; i++) {
      var piece = document.createElement('i');
      piece.style.left = (5 + Math.random() * 90) + '%';
      piece.style.background = colors[i % colors.length];
      piece.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px');
      piece.style.setProperty('--rot', (Math.random() * 900 - 450) + 'deg');
      piece.style.animationDelay = (Math.random() * 0.25) + 's';
      piece.style.animationDuration = (1.1 + Math.random() * 0.8) + 's';
      layer.appendChild(piece);
    }
    document.body.appendChild(layer);
    setTimeout(function () { if (layer.parentNode) layer.parentNode.removeChild(layer); }, 2400);
  }

  load();
})();
