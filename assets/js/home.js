/* home.js — the home page: grade tabs and the list of reviews. */
(function () {
  'use strict';
  var el = UI.el;
  var GRADES = [6, 7];
  var tabsNode = document.getElementById('grade-tabs');
  var listNode = document.getElementById('reviews');

  function startingGrade() {
    var match = /[?&]grade=(\d)/.exec(location.search);
    var wanted = match ? Number(match[1]) : null;
    return GRADES.indexOf(wanted) >= 0 ? wanted : GRADES[0];
  }

  function card(review) {
    return el('a', { class: 'review-card', href: 'review.html?id=' + encodeURIComponent(review.id) },
      el('div', { class: 'card-top' },
        el('span', { class: 'pill' }, 'Grade ' + review.grade + ' · ' + review.label),
        el('span', { class: 'pill pill-gold' }, review.problems + ' problems')
      ),
      el('h2', { text: review.title }),
      el('p', { class: 'sub', text: review.subtitle }),
      el('ul', { class: 'skill-tags' }, (review.skills || []).map(function (skill) { return el('li', { text: skill }); })),
      el('div', { class: 'card-cta' }, 'Start reviewing', UI.icon('arrowRight'))
    );
  }

  function show(grade) {
    Array.prototype.forEach.call(tabsNode.children, function (tab) {
      var on = Number(tab.getAttribute('data-grade')) === grade;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
    });
    var reviews = WDMS.catalog.filter(function (r) { return r.grade === grade; });
    listNode.innerHTML = '';
    if (!reviews.length) {
      listNode.appendChild(el('div', { class: 'empty' },
        el('div', { class: 'empty-mark', 'aria-hidden': 'true' }, '✎'),
        el('h2', { text: 'Grade ' + grade + ' reviews are on the way' }),
        el('p', { text: 'A review will show up here before your next test or quiz.' })
      ));
      return;
    }
    listNode.appendChild(el('div', { class: 'review-grid' }, reviews.map(card)));
  }

  GRADES.forEach(function (grade) {
    tabsNode.appendChild(el('button', {
      class: 'grade-tab', role: 'tab', type: 'button', 'data-grade': grade,
      onclick: function () { show(grade); }
    }, 'Grade ' + grade));
  });
  tabsNode.addEventListener('keydown', function (event) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    var tabs = Array.prototype.slice.call(tabsNode.children);
    var index = tabs.indexOf(document.activeElement);
    var next = tabs[(index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    next.focus(); next.click();
  });

  show(startingGrade());
})();
