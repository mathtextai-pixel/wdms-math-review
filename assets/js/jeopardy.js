/*
 * jeopardy.js — the Jeopardy game.
 *
 * One board per topic: categories across the top, point values going down.
 * The teacher (or a student playing alone) opens a tile, shows the answer,
 * and marks who was right or wrong. The site keeps score.
 *
 * The game in progress is saved on this computer only (localStorage), so a
 * refresh picks up where it left off. Nothing is sent anywhere.
 */
(function () {
  'use strict';

  var el = UI.el;
  var icon = UI.icon;
  var app = document.getElementById('app');
  var controls = document.getElementById('controls');

  var game = null;     // the question pool for this topic
  var state = null;    // the game in progress (saved)
  var draft = null;    // choices on the setup screen
  var MIN_TEAMS = 2;
  var MAX_TEAMS = 8;
  var TIMER_CHOICES = [[0, 'Off'], [30, '30 sec'], [45, '45 sec'], [60, '60 sec'], [90, '90 sec'], [120, '2 min']];

  /* ======================================================================
     Saving (this computer only)
     ====================================================================== */

  function storageKey(kind) { return 'wdms-jeopardy:' + kind + ':' + game.id; }

  function read(kind) {
    try { return JSON.parse(localStorage.getItem(storageKey(kind))); } catch (e) { return null; }
  }
  function write(kind, value) {
    try {
      if (value == null) localStorage.removeItem(storageKey(kind));
      else localStorage.setItem(storageKey(kind), JSON.stringify(value));
    } catch (e) { /* private mode or storage full: the game still works, it just isn't saved */ }
  }
  function save() { write('game', state); }

  /* ======================================================================
     Sound effects (made with the browser's own tone generator — no files)
     ====================================================================== */

  var audio = null;

  function tone(freq, start, length, type, volume) {
    var osc = audio.createOscillator();
    var gain = audio.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    var t0 = audio.currentTime + start;
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(volume || 0.18, t0 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + length);
    osc.connect(gain); gain.connect(audio.destination);
    osc.start(t0); osc.stop(t0 + length + 0.03);
  }

  var SOUNDS = {
    select: function () { tone(523, 0, 0.12, 'triangle'); tone(784, 0.07, 0.16, 'triangle'); },
    reveal: function () { tone(659, 0, 0.14, 'sine'); tone(880, 0.09, 0.22, 'sine'); },
    right: function () { tone(523, 0, 0.13, 'triangle'); tone(659, 0.1, 0.13, 'triangle'); tone(784, 0.2, 0.26, 'triangle'); },
    wrong: function () { tone(196, 0, 0.22, 'sawtooth', 0.12); tone(147, 0.16, 0.34, 'sawtooth', 0.12); },
    double: function () { [392, 494, 587, 784, 988, 1175].forEach(function (f, i) { tone(f, i * 0.09, 0.2, 'square', 0.09); }); },
    tick: function () { tone(880, 0, 0.06, 'square', 0.06); },
    timeup: function () { tone(440, 0, 0.18, 'square', 0.12); tone(440, 0.26, 0.18, 'square', 0.12); tone(330, 0.52, 0.5, 'square', 0.12); },
    final: function () { [262, 330, 392, 523].forEach(function (f, i) { tone(f, i * 0.16, 0.34, 'triangle', 0.14); }); },
    win: function () { [523, 659, 784, 1047, 784, 1047, 1319].forEach(function (f, i) { tone(f, i * 0.13, 0.3, 'triangle', 0.16); }); }
  };

  function soundOn() { return state ? state.settings.sound : (draft ? draft.sound : true); }

  function play(name) {
    if (!soundOn()) return;
    try {
      if (!audio) {
        var Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        audio = new Ctx();
      }
      if (audio.state === 'suspended') audio.resume();
      SOUNDS[name]();
    } catch (e) { /* sound is a nice-to-have */ }
  }

  /* ======================================================================
     Timer
     ====================================================================== */

  var timer = { left: 0, total: 0, handle: null, nodes: null };

  function stopTimer() {
    if (timer.handle) { clearInterval(timer.handle); timer.handle = null; }
  }

  // Once the answer is showing, the countdown is over: take it off the screen.
  function hideTimer() {
    stopTimer();
    if (timer.nodes) { timer.nodes.box.hidden = true; timer.nodes.bar.hidden = true; }
  }

  function paintTimer() {
    if (!timer.nodes) return;
    var low = timer.left <= 10 && timer.left > 0;
    var done = timer.left <= 0;
    var mins = Math.floor(timer.left / 60);
    var secs = timer.left % 60;
    timer.nodes.num.textContent = done ? 'Time!' : mins + ':' + (secs < 10 ? '0' : '') + secs;
    timer.nodes.box.className = 'timer' + (done ? ' is-done' : low ? ' is-low' : '');
    timer.nodes.bar.className = 'timer-bar' + (low || done ? ' is-low' : '');
    timer.nodes.fill.style.transform = 'scaleX(' + (timer.total ? timer.left / timer.total : 0) + ')';
  }

  function startTimer() {
    stopTimer();
    timer.total = state.settings.timer;
    timer.left = timer.total;
    paintTimer();
    if (!timer.total) return;
    timer.handle = setInterval(function () {
      timer.left -= 1;
      if (timer.left <= 5 && timer.left > 0) play('tick');
      if (timer.left <= 0) { timer.left = 0; stopTimer(); play('timeup'); }
      paintTimer();
    }, 1000);
  }

  // The timer pieces for a question screen: [headerPart, barUnderHeader]
  function buildTimer() {
    if (!state.settings.timer) { timer.nodes = null; return [null, null]; }
    var num = el('span', { class: 'timer-num', role: 'timer', 'aria-label': 'Time left' });
    var box = el('div', { class: 'timer' }, num,
      el('button', { type: 'button', 'aria-label': 'Restart the timer', title: 'Restart the timer', onclick: startTimer }, icon('refresh')));
    var fill = el('i');
    var bar = el('div', { class: 'timer-bar' }, fill);
    timer.nodes = { num: num, box: box, bar: bar, fill: fill };
    return [box, bar];
  }

  /* ======================================================================
     Starting a game
     ====================================================================== */

  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

  function newGame(setup) {
    var last = read('last') || {};
    var variants = game.categories.map(function (category, c) {
      return category.tiles.map(function (options, r) {
        // Prefer the question that was NOT used last game, so the board changes.
        var previous = last.variants && last.variants[c] ? last.variants[c][r] : null;
        var fresh = [];
        for (var i = 0; i < options.length; i++) if (i !== previous) fresh.push(i);
        if (!fresh.length || Math.random() < 0.15) return Math.floor(Math.random() * options.length);
        return pick(fresh);
      });
    });

    // Two Daily Doubles: never in the top row, and in different categories.
    var cols = UI.shuffle(game.categories.map(function (_, i) { return i; })).slice(0, 2);
    var doubles = cols.map(function (c) { return [c, 1 + Math.floor(Math.random() * (game.values.length - 1))]; });

    var finalChoices = [];
    for (var f = 0; f < game.finals.length; f++) if (f !== last.final) finalChoices.push(f);
    var finalIndex = finalChoices.length ? pick(finalChoices) : 0;
    write('last', { variants: variants, final: finalIndex });

    state = {
      version: 1,
      mode: setup.mode,
      settings: { timer: setup.timer, sound: setup.sound },
      teams: setup.names.map(function (name) { return { name: name, score: 0 }; }),
      variants: variants,
      used: game.categories.map(function (category) { return category.tiles.map(function () { return false; }); }),
      doubles: doubles,
      finalIndex: finalIndex,
      phase: 'board',
      current: null,
      final: null
    };
    save();
    render();
  }

  function validSave(saved) {
    return saved && saved.version === 1 && saved.teams && saved.variants &&
      saved.variants.length === game.categories.length && saved.finalIndex < game.finals.length;
  }

  /* ======================================================================
     Rendering
     ====================================================================== */

  function setView(node) {
    app.innerHTML = '';
    app.appendChild(node);
  }

  function render() {
    stopTimer();
    renderControls();
    if (!state) return renderSetup();
    switch (state.phase) {
      case 'board': return renderBoard();
      case 'double': return renderDouble();
      case 'question': return renderQuestion();
      case 'final-wager': return renderFinalWager();
      case 'final-question': return renderFinalQuestion();
      case 'done': return renderResults();
    }
  }

  function renderControls() {
    controls.innerHTML = '';
    var on = soundOn();
    controls.appendChild(el('button', {
      type: 'button', class: 'ctl', 'aria-pressed': on ? 'true' : 'false', title: on ? 'Sound is on' : 'Sound is off',
      onclick: function () {
        if (state) { state.settings.sound = !state.settings.sound; save(); } else { draft.sound = !draft.sound; }
        render();
        play('select');
      }
    }, icon(on ? 'sound' : 'mute'), el('span', { class: 'label', text: on ? 'Sound on' : 'Sound off' })));

    if (document.documentElement.requestFullscreen) {
      controls.appendChild(el('button', {
        type: 'button', class: 'ctl', title: 'Full screen',
        onclick: function () {
          if (document.fullscreenElement) document.exitFullscreen();
          else document.documentElement.requestFullscreen().catch(function () {});
        }
      }, icon('expand'), el('span', { class: 'label', text: 'Full screen' })));
    }

    if (state) {
      controls.appendChild(el('button', {
        type: 'button', class: 'ctl', title: 'Start a new game',
        onclick: function () {
          if (state.phase !== 'done' && !window.confirm('Start a new game? The current scores will be cleared.')) return;
          draft = draftFromState();
          state = null;
          write('game', null);
          render();
        }
      }, icon('refresh'), el('span', { class: 'label', text: 'New game' })));
    }
  }

  /* ----- setup ----- */

  function defaultDraft() {
    var prefs = read('prefs') || {};
    var names = [];
    for (var i = 0; i < MAX_TEAMS; i++) names.push((prefs.names && prefs.names[i]) || 'Team ' + (i + 1));
    return {
      mode: prefs.mode === 'solo' ? 'solo' : 'teams',
      count: Math.min(MAX_TEAMS, Math.max(MIN_TEAMS, prefs.count || 3)),
      names: names,
      solo: prefs.solo || '',
      timer: typeof prefs.timer === 'number' ? prefs.timer : 60,
      sound: prefs.sound !== false
    };
  }

  function draftFromState() {
    var next = defaultDraft();
    next.mode = state.mode;
    next.timer = state.settings.timer;
    next.sound = state.settings.sound;
    if (state.mode === 'teams') {
      next.count = state.teams.length;
      state.teams.forEach(function (team, i) { next.names[i] = team.name; });
    } else {
      next.solo = state.teams[0].name === 'Your score' ? '' : state.teams[0].name;
    }
    return next;
  }

  function renderSetup() {
    if (!draft) draft = defaultDraft();
    var total = game.categories.length * game.values.length;

    function modeCard(mode, glyph, title, text) {
      return el('button', {
        type: 'button', class: 'mode', role: 'radio', 'aria-checked': draft.mode === mode ? 'true' : 'false',
        onclick: function () { draft.mode = mode; renderSetup(); }
      },
        el('span', { class: 'mode-icon' }, icon(glyph)),
        el('span', null, el('span', { class: 'mode-title', style: 'display:block', text: title }), el('span', { class: 'mode-text', style: 'display:block', text: text }))
      );
    }

    var players;
    if (draft.mode === 'teams') {
      var inputs = [];
      for (var i = 0; i < draft.count; i++) {
        (function (index) {
          inputs.push(el('input', {
            class: 'name-input', type: 'text', maxlength: '18', value: draft.names[index], 'aria-label': 'Name of team ' + (index + 1),
            autocomplete: 'off', spellcheck: 'false',
            oninput: function (event) { draft.names[index] = event.target.value; },
            onfocus: function (event) { event.target.select(); }
          }));
        })(i);
      }
      players = el('div', null,
        el('span', { class: 'setup-label', text: 'Teams' }),
        el('div', { class: 'stepper' },
          el('button', { type: 'button', 'aria-label': 'One fewer team', disabled: draft.count <= MIN_TEAMS, onclick: function () { draft.count -= 1; renderSetup(); } }, '−'),
          el('output', { text: draft.count + ' teams' }),
          el('button', { type: 'button', 'aria-label': 'One more team', disabled: draft.count >= MAX_TEAMS, onclick: function () { draft.count += 1; renderSetup(); } }, '+')
        ),
        el('div', { class: 'name-grid' }, inputs)
      );
    } else {
      players = el('div', null,
        el('span', { class: 'setup-label', text: 'Your name (optional)' }),
        el('input', {
          class: 'name-input', style: 'max-width:280px', type: 'text', maxlength: '18', value: draft.solo, placeholder: 'Your name',
          autocomplete: 'off', spellcheck: 'false', 'aria-label': 'Your name',
          oninput: function (event) { draft.solo = event.target.value; }
        })
      );
    }

    var view = el('div', { class: 'setup' },
      el('section', { class: 'setup-card' },
        el('span', { class: 'eyebrow', text: 'Grade ' + game.grade + ' · Jeopardy' }),
        el('h1', { text: game.title }),
        el('p', { class: 'setup-sub', text: game.subtitle + ' · ' + game.categories.length + ' categories · ' + total + ' questions' }),

        el('span', { class: 'setup-label', text: 'How are you playing?' }),
        el('div', { class: 'mode-grid', role: 'radiogroup' },
          modeCard('teams', 'users', 'Teams', 'Play as a class. The board keeps every team\'s score.'),
          modeCard('solo', 'user', 'Solo', 'Play on your own and try to beat your best score.')
        ),
        players,

        el('span', { class: 'setup-label', text: 'Timer for each question' }),
        el('div', { class: 'chips', role: 'radiogroup' }, TIMER_CHOICES.map(function (choice) {
          return el('button', {
            type: 'button', class: 'chip', role: 'radio', 'aria-checked': draft.timer === choice[0] ? 'true' : 'false',
            onclick: function () { draft.timer = choice[0]; renderSetup(); }
          }, choice[1]);
        })),

        el('div', { class: 'setup-actions' },
          el('button', { type: 'button', class: 'btn btn-primary btn-lg', id: 'start-game', onclick: begin }, 'Start the game', icon('arrowRight'))
        ),
        el('p', { class: 'setup-note', text: 'Right answers add points and wrong answers take them away. Watch for two hidden Daily Doubles. Every new game mixes in different questions.' })
      )
    );
    setView(view);
    renderControls();
  }

  function begin() {
    var names;
    if (draft.mode === 'teams') {
      names = draft.names.slice(0, draft.count).map(function (name, i) { return name.trim() || 'Team ' + (i + 1); });
    } else {
      names = [draft.solo.trim() || 'Your score'];
    }
    write('prefs', { mode: draft.mode, count: draft.count, names: draft.names, solo: draft.solo, timer: draft.timer, sound: draft.sound });
    play('final');
    newGame({ mode: draft.mode, names: names, timer: draft.timer, sound: draft.sound });
  }

  /* ----- scores ----- */

  function formatScore(score) { return (score < 0 ? '−' : '') + Math.abs(score).toLocaleString('en-US'); }

  function leaders() {
    var best = Math.max.apply(null, state.teams.map(function (team) { return team.score; }));
    return state.teams.map(function (team) { return state.mode === 'teams' && best > 0 && team.score === best; });
  }

  function scoreboard() {
    var lead = leaders();
    var node = el('div', { class: 'scores', style: '--teams:' + state.teams.length });
    state.teams.forEach(function (team, i) {
      var score = el('div', { class: 'team-score' + (team.score < 0 ? ' is-negative' : ''), text: formatScore(team.score) });
      function adjust(amount) {
        team.score += amount;
        save();
        var fresh = scoreboard();
        node.parentNode.replaceChild(fresh, node);
        fresh.children[i].querySelector('.team-score').classList.add('bump');
      }
      node.appendChild(el('div', { class: 'team' + (lead[i] ? ' is-leading' : '') },
        el('div', { class: 'team-info' }, el('div', { class: 'team-name', text: team.name }), score),
        el('div', { class: 'adjust' },
          el('button', { type: 'button', 'aria-label': 'Add 100 to ' + team.name, title: 'Add 100', onclick: function () { adjust(100); } }, '+'),
          el('button', { type: 'button', 'aria-label': 'Take 100 from ' + team.name, title: 'Take away 100', onclick: function () { adjust(-100); } }, '−')
        )
      ));
    });
    return node;
  }

  /* ----- board ----- */

  function tilesLeft() {
    var left = 0;
    state.used.forEach(function (column) { column.forEach(function (used) { if (!used) left += 1; }); });
    return left;
  }

  function isDouble(c, r) {
    return state.doubles.some(function (d) { return d[0] === c && d[1] === r; });
  }

  function renderBoard() {
    var board = el('div', { class: 'board', style: '--cols:' + game.categories.length });
    game.categories.forEach(function (category) { board.appendChild(el('div', { class: 'cat', text: category.name })); });
    game.values.forEach(function (value, r) {
      game.categories.forEach(function (category, c) {
        board.appendChild(el('button', {
          type: 'button', class: 'tile', disabled: state.used[c][r],
          'aria-label': category.name + ' for ' + value + (state.used[c][r] ? ', already played' : ''),
          onclick: function () { openTile(c, r); }
        }, String(value)));
      });
    });

    var left = tilesLeft();
    var finalButton = el('button', {
      type: 'button', class: 'btn btn-dark final-btn' + (left === 0 ? ' is-ready' : ''),
      onclick: function () {
        if (left > 0 && !window.confirm('There are still ' + left + ' questions on the board. Go to Final Jeopardy now?')) return;
        startFinal();
      }
    }, 'Final Jeopardy');

    setView(el('div', { class: 'stage' },
      el('div', { class: 'board-scroll' }, board),
      el('div', { class: 'board-foot' }, scoreboard(), finalButton)
    ));
  }

  function openTile(c, r) {
    var double = isDouble(c, r);
    state.current = { c: c, r: r, value: game.values[r], double: double, team: state.mode === 'solo' ? 0 : null, revealed: false, marks: {} };
    state.phase = double ? 'double' : 'question';
    save();
    play(double ? 'double' : 'select');
    render();
  }

  function currentQuestion() {
    var cur = state.current;
    return game.categories[cur.c].tiles[cur.r][state.variants[cur.c][cur.r]];
  }

  /* ----- Daily Double ----- */

  function maxWager(team) { return Math.max(team.score, game.values[game.values.length - 1]); }

  function clampWager(value, max) {
    var n = Math.round(Number(value));
    if (!isFinite(n) || n < 0) n = 0;
    return Math.min(max, n);
  }

  function renderDouble() {
    var cur = state.current;
    var solo = state.mode === 'solo';
    var panel = el('div', { class: 'wager-panel' });

    function paint() {
      panel.innerHTML = '';
      if (!solo) {
        panel.appendChild(el('span', { class: 'setup-label', style: 'margin:0', text: 'Which team picked it?' }));
        panel.appendChild(el('div', { class: 'chips', style: 'justify-content:center' }, state.teams.map(function (team, i) {
          return el('button', {
            type: 'button', class: 'chip', 'aria-pressed': cur.team === i ? 'true' : 'false',
            onclick: function () { cur.team = i; cur.wager = null; save(); paint(); }
          }, team.name);
        })));
      }
      if (cur.team === null) return;
      var team = state.teams[cur.team];
      var max = maxWager(team);
      var input = el('input', {
        class: 'wager-input wager-big', type: 'number', inputmode: 'numeric', min: '0', max: String(max), step: '50',
        value: cur.wager == null ? '' : String(cur.wager), placeholder: '0', 'aria-label': 'Wager',
        oninput: function (event) { cur.wager = event.target.value === '' ? null : clampWager(event.target.value, max); save(); go.disabled = !cur.wager; }
      });
      var quick = [100, 200, 500, max].filter(function (v, i, list) { return v <= max && list.indexOf(v) === i; });
      var go = el('button', {
        type: 'button', class: 'btn btn-primary btn-xl', disabled: !cur.wager,
        onclick: function () {
          cur.wager = clampWager(input.value, max);
          if (!cur.wager) return;
          cur.value = cur.wager;
          state.phase = 'question';
          save(); play('select'); render();
        }
      }, 'Show the question', icon('arrowRight'));
      panel.appendChild(el('span', { class: 'setup-label', style: 'margin:6px 0 0', text: (solo ? 'Your wager' : team.name + '\'s wager') + ' (up to ' + formatScore(max) + ')' }));
      panel.appendChild(input);
      panel.appendChild(el('div', { class: 'chips', style: 'justify-content:center' }, quick.map(function (amount) {
        return el('button', { type: 'button', class: 'chip', onclick: function () { cur.wager = amount; input.value = String(amount); save(); go.disabled = false; } },
          amount === max ? 'All in: ' + formatScore(amount) : formatScore(amount));
      })));
      panel.appendChild(go);
    }
    paint();

    setView(el('div', { class: 'qscreen' },
      el('div', { class: 'q-head' }, el('span', { class: 'q-cat', text: game.categories[cur.c].name }), el('span', { class: 'q-tag', text: 'Daily Double' })),
      el('div', { class: 'splash' },
        el('div', { class: 'splash-title', text: 'Daily Double!' }),
        el('p', { class: 'splash-sub', text: 'Choose how many points to risk. A right answer wins them. A wrong answer loses them.' }),
        panel
      )
    ));
  }

  /* ----- a question ----- */

  // Rows of Right / Wrong buttons. `stakes(i)` is how many points team i wins or loses.
  function judgePanel(teamIndexes, marks, stakes, onChange) {
    var solo = state.mode === 'solo';
    var panel = el('div', { class: 'judge' });
    function paint() {
      panel.innerHTML = '';
      teamIndexes.forEach(function (i) {
        var team = state.teams[i];
        var mark = marks[i] || 0;
        function set(value) {
          var next = mark === value ? 0 : value;
          team.score += (next - mark) * stakes(i);
          if (next) marks[i] = next; else delete marks[i];
          if (next === 1) play('right'); else if (next === -1) play('wrong');
          save(); paint(); if (onChange) onChange();
        }
        panel.appendChild(el('div', { class: 'judge-team' + (mark === 1 ? ' is-right' : mark === -1 ? ' is-wrong' : '') },
          el('div', { class: 'judge-name' }, solo ? 'Did you get it?' : team.name,
            el('small', { text: (solo ? 'Score: ' : '') + formatScore(team.score) + (mark ? '  (' + (mark === 1 ? '+' : '−') + formatScore(stakes(i)) + ')' : '') })),
          el('button', { type: 'button', class: 'mark mark-right', 'aria-pressed': mark === 1 ? 'true' : 'false', 'aria-label': (solo ? 'I got it right' : team.name + ' was right'), title: 'Right', onclick: function () { set(1); } }, icon('check')),
          el('button', { type: 'button', class: 'mark mark-wrong', 'aria-pressed': mark === -1 ? 'true' : 'false', 'aria-label': (solo ? 'I got it wrong' : team.name + ' was wrong'), title: 'Wrong', onclick: function () { set(-1); } }, icon('x'))
        ));
      });
    }
    paint();
    return panel;
  }

  function questionText(source) {
    var plain = String(source).replace(/\$[^$]*\$/g, 'xxxx');
    return el('div', { class: 'q-text' + (plain.length > 110 ? ' is-long' : ''), html: UI.rich(source) });
  }

  // The answer, plus a "How to solve it" button that opens numbered steps.
  // `holder` is the current question (or Final Jeopardy) so the open/closed
  // choice survives a refresh.
  function solution(question, holder, body) {
    var panel = el('div', { class: 'how-panel', id: 'how-panel' },
      el('div', { class: 'how-head' }, icon('bulb'), 'How to solve it'),
      el('ol', { class: 'how-steps' }, question.steps.map(function (step) { return el('li', { html: UI.inline(step) }); }))
    );
    var toggle = el('button', { type: 'button', class: 'btn btn-outline how-toggle', id: 'show-steps', 'aria-controls': 'how-panel' });

    function paint() {
      var open = !!holder.explained;
      panel.hidden = !open;
      body.classList.toggle('is-explained', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.innerHTML = '';
      toggle.appendChild(icon(open ? 'x' : 'bulb'));
      toggle.appendChild(document.createTextNode(open ? 'Hide the steps' : 'How to solve it'));
    }
    toggle.addEventListener('click', function () {
      holder.explained = !holder.explained;
      save(); paint();
      if (holder.explained) panel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
    paint();

    return el('div', { class: 'solution' },
      el('div', { class: 'answer-box' },
        el('span', { class: 'answer-label', text: 'Answer' }),
        el('div', { class: 'answer-text', html: UI.inline(question.a) }),
        toggle
      ),
      panel
    );
  }

  function renderQuestion() {
    var cur = state.current;
    var question = currentQuestion();
    var timerParts = buildTimer();
    var body = el('div', { class: 'q-body' }, questionText(question.q));
    var foot = el('div', { class: 'q-foot' });

    function paintFoot() {
      foot.innerHTML = '';
      if (!cur.revealed) {
        foot.appendChild(el('div', { class: 'q-actions' },
          el('button', { type: 'button', class: 'btn btn-ghost', onclick: putBack }, icon('arrowLeft'), 'Put it back'),
          el('span', { class: 'spacer' }),
          el('button', { type: 'button', class: 'btn btn-primary btn-xl', id: 'show-answer', onclick: reveal }, 'Show answer')
        ));
        return;
      }
      var who = cur.double ? [cur.team] : state.teams.map(function (_, i) { return i; });
      foot.appendChild(judgePanel(who, cur.marks, function () { return cur.value; }));
      foot.appendChild(el('div', { class: 'q-actions' },
        el('button', { type: 'button', class: 'btn btn-ghost', onclick: putBack }, icon('arrowLeft'), 'Put it back'),
        el('span', { class: 'spacer' }),
        el('button', { type: 'button', class: 'btn btn-dark btn-xl', id: 'back-to-board', onclick: finishQuestion }, 'Back to the board', icon('arrowRight'))
      ));
    }

    function reveal() {
      cur.revealed = true;
      hideTimer();
      save();
      play('reveal');
      body.appendChild(solution(question, cur, body));
      paintFoot();
    }

    // Undo any points from this question and leave the tile on the board.
    function putBack() {
      Object.keys(cur.marks).forEach(function (i) { state.teams[i].score -= cur.marks[i] * cur.value; });
      state.current = null;
      state.phase = 'board';
      save(); render();
    }

    function finishQuestion() {
      state.used[cur.c][cur.r] = true;
      state.current = null;
      state.phase = 'board';
      save(); render();
    }

    if (cur.revealed) body.appendChild(solution(question, cur, body));
    paintFoot();

    setView(el('div', { class: 'qscreen' },
      el('div', { class: 'q-head' },
        el('span', { class: 'q-cat', text: game.categories[cur.c].name }),
        el('span', { class: 'q-value', text: formatScore(cur.value) }),
        cur.double ? el('span', { class: 'q-tag', text: 'Daily Double' }) : null,
        cur.double && state.mode === 'teams' ? el('span', { class: 'q-who', text: state.teams[cur.team].name }) : null,
        timerParts[0]
      ),
      timerParts[1],
      body, foot
    ));
    if (!cur.revealed) startTimer(); else hideTimer();
  }

  /* ----- Final Jeopardy ----- */

  function startFinal() {
    state.final = { wagers: state.teams.map(function () { return null; }), revealed: false, marks: {} };
    state.current = null;
    state.phase = 'final-wager';
    save(); play('final'); render();
  }

  function renderFinalWager() {
    var final = state.final;
    var question = game.finals[state.finalIndex];
    var solo = state.mode === 'solo';
    var go = el('button', {
      type: 'button', class: 'btn btn-primary btn-xl',
      onclick: function () {
        state.teams.forEach(function (team, i) { final.wagers[i] = clampWager(final.wagers[i] == null ? 0 : final.wagers[i], maxWager(team)); });
        state.phase = 'final-question';
        save(); play('select'); render();
      }
    }, 'Show the question', icon('arrowRight'));

    var rows = state.teams.map(function (team, i) {
      var max = maxWager(team);
      return el('div', { class: 'wager-row' },
        el('div', { class: 'judge-name' }, solo ? 'Your wager' : team.name, el('small', { text: 'Score: ' + formatScore(team.score) })),
        el('span', { class: 'wager-max', text: 'up to ' + formatScore(max) }),
        el('input', {
          class: 'wager-input', type: 'number', inputmode: 'numeric', min: '0', max: String(max), step: '50', placeholder: '0',
          value: final.wagers[i] == null ? '' : String(final.wagers[i]), 'aria-label': 'Wager for ' + team.name,
          oninput: function (event) { final.wagers[i] = event.target.value === '' ? null : clampWager(event.target.value, max); save(); },
          onblur: function (event) { if (event.target.value !== '') event.target.value = String(clampWager(event.target.value, max)); }
        })
      );
    });

    setView(el('div', { class: 'qscreen' },
      el('div', { class: 'q-head' }, el('span', { class: 'q-cat', text: 'Final Jeopardy' }), el('span', { class: 'q-tag', text: 'Wagers' })),
      el('div', { class: 'splash' },
        el('div', { class: 'splash-title', text: 'Final Jeopardy' }),
        el('p', { class: 'splash-sub', text: 'The category is' }),
        el('div', { class: 'splash-cat', text: question.category }),
        el('p', { class: 'splash-sub', text: solo ? 'How many points will you risk?' : 'Each team decides how many points to risk before seeing the question.' }),
        el('div', { class: 'wager-panel' }, rows, go)
      ),
      el('div', { class: 'q-foot' }, el('div', { class: 'q-actions' },
        el('button', { type: 'button', class: 'btn btn-ghost', onclick: function () { state.final = null; state.phase = 'board'; save(); render(); } }, icon('arrowLeft'), 'Back to the board')
      ))
    ));
  }

  function renderFinalQuestion() {
    var final = state.final;
    var question = game.finals[state.finalIndex];
    var timerParts = buildTimer();
    var body = el('div', { class: 'q-body' }, questionText(question.q));
    var foot = el('div', { class: 'q-foot' });

    function paintFoot() {
      foot.innerHTML = '';
      if (!final.revealed) {
        foot.appendChild(el('div', { class: 'q-actions' },
          el('span', { class: 'spacer' }),
          el('button', { type: 'button', class: 'btn btn-primary btn-xl', id: 'show-answer', onclick: function () {
            final.revealed = true; hideTimer(); save(); play('reveal');
            body.appendChild(solution(question, final, body)); paintFoot();
          } }, 'Show answer')
        ));
        return;
      }
      foot.appendChild(judgePanel(state.teams.map(function (_, i) { return i; }), final.marks, function (i) { return final.wagers[i] || 0; }));
      foot.appendChild(el('div', { class: 'q-actions' },
        el('span', { class: 'spacer' }),
        el('button', { type: 'button', class: 'btn btn-dark btn-xl', id: 'see-results', onclick: function () { state.phase = 'done'; save(); render(); } }, 'See the results', icon('arrowRight'))
      ));
    }

    if (final.revealed) body.appendChild(solution(question, final, body));
    paintFoot();
    setView(el('div', { class: 'qscreen' },
      el('div', { class: 'q-head' },
        el('span', { class: 'q-cat', text: question.category }),
        el('span', { class: 'q-tag', text: 'Final Jeopardy' }),
        timerParts[0]
      ),
      timerParts[1], body, foot
    ));
    if (!final.revealed) startTimer(); else hideTimer();
  }

  /* ----- results ----- */

  function renderResults() {
    var solo = state.mode === 'solo';
    var ranked = state.teams.slice().sort(function (a, b) { return b.score - a.score; });
    var top = ranked[0].score;
    var winners = ranked.filter(function (team) { return team.score === top; });

    var heading, lead;
    if (solo) {
      heading = 'Final score: ' + formatScore(top);
      var best = read('best');
      if (typeof best !== 'number' || top > best) {
        write('best', top);
        lead = typeof best === 'number' ? 'A new personal best! Your old best was ' + formatScore(best) + '.' : 'That\'s your score to beat next time.';
      } else {
        lead = 'Your best so far is ' + formatScore(best) + '. Play again to beat it.';
      }
    } else if (winners.length > 1) {
      heading = 'It\'s a tie!';
      lead = winners.map(function (team) { return team.name; }).join(' and ') + ' finish with ' + formatScore(top) + ' points each.';
    } else {
      heading = winners[0].name + ' wins!';
      lead = 'Great game, everyone.';
    }

    var place = 0;
    var standings = solo ? null : el('div', { class: 'standings' }, ranked.map(function (team, i) {
      if (i === 0 || team.score !== ranked[i - 1].score) place = i + 1;
      return el('div', { class: 'standing' + (team.score === top ? ' is-winner' : '') },
        el('span', { class: 'place', text: String(place) }),
        el('span', { class: 'standing-name', text: team.name }),
        el('span', { class: 'standing-score', text: formatScore(team.score) })
      );
    }));

    setView(el('div', { class: 'results' },
      el('span', { class: 'eyebrow', text: game.title }),
      el('h1', { text: heading }),
      el('p', { class: 'lead', text: lead }),
      standings,
      el('div', { class: 'results-actions' },
        el('button', {
          type: 'button', class: 'btn btn-primary btn-lg', id: 'play-again',
          onclick: function () {
            var setup = { mode: state.mode, names: state.teams.map(function (team) { return team.name; }), timer: state.settings.timer, sound: state.settings.sound };
            play('final');
            newGame(setup);
          }
        }, icon('refresh'), 'Play again with new questions'),
        el('button', { type: 'button', class: 'btn btn-outline btn-lg', onclick: function () { draft = draftFromState(); state = null; write('game', null); render(); } }, solo ? 'Change settings' : 'Change teams'),
        el('a', { class: 'btn btn-ghost btn-lg', href: 'review.html?id=' + encodeURIComponent(game.id) }, 'Go to the study review')
      )
    ));
    play('win');
    celebrate(90);
  }

  function celebrate(pieces) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var colors = ['#0e4507', '#2a7d20', '#101310', '#7fb873', '#c9e0c4', '#4a524b'];
    var layer = el('div', { class: 'confetti', 'aria-hidden': 'true' });
    for (var i = 0; i < pieces; i++) {
      var piece = document.createElement('i');
      piece.style.left = (3 + Math.random() * 94) + '%';
      piece.style.background = colors[i % colors.length];
      piece.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px');
      piece.style.setProperty('--rot', (Math.random() * 900 - 450) + 'deg');
      piece.style.animationDelay = (Math.random() * 0.5) + 's';
      piece.style.animationDuration = (1.4 + Math.random() * 1.2) + 's';
      layer.appendChild(piece);
    }
    document.body.appendChild(layer);
    setTimeout(function () { if (layer.parentNode) layer.parentNode.removeChild(layer); }, 3600);
  }

  /* ======================================================================
     Keyboard: Space or Enter shows the answer, Escape goes back
     ====================================================================== */

  document.addEventListener('keydown', function (event) {
    if (!state || /^(INPUT|TEXTAREA|BUTTON|A)$/.test(event.target.tagName)) return;
    if (event.key === ' ' || event.key === 'Enter') {
      var button = document.getElementById('show-answer') || document.getElementById('back-to-board');
      if (button) { event.preventDefault(); button.click(); }
    }
  });

  /* ======================================================================
     Loading
     ====================================================================== */

  function showNotice(title, text) {
    app.innerHTML = '';
    app.appendChild(el('div', { class: 'notice', style: 'max-width:640px;margin:40px auto' },
      el('h1', { text: title }), el('p', { text: text }),
      el('a', { class: 'btn btn-primary', href: 'index.html' }, icon('home'), 'Go to the home page')
    ));
  }

  function load() {
    var match = /[?&]id=([a-z0-9-]+)/i.exec(location.search);
    var id = match ? match[1] : null;
    var listed = id && WDMS.catalog.some(function (entry) { return entry.id === id && entry.jeopardy; });
    if (!listed) { showNotice('We couldn\'t find that game', 'The link may be old or mistyped. Pick a game from the home page.'); return; }
    var script = document.createElement('script');
    script.src = 'games/' + id + '.js';
    script.onload = function () {
      game = WDMS.games[id];
      if (!game) { showNotice('This game didn\'t load', 'Please refresh the page to try again.'); return; }
      document.title = game.title + ' · Grade ' + game.grade + ' · WDMS Math Review';
      document.getElementById('game-name').textContent = 'Grade ' + game.grade + ' · ' + game.title;
      var saved = read('game');
      state = validSave(saved) ? saved : null;
      render();
    };
    script.onerror = function () { showNotice('This game didn\'t load', 'Check your internet connection and refresh the page.'); };
    document.head.appendChild(script);
  }

  load();
})();
