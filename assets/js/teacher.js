/* teacher.js — the teacher page: one direct link per review, with a copy button. */
(function () {
  'use strict';
  var el = UI.el;

  function absolute(path) { return new URL(path, location.href).href; }

  function copy(text, button) {
    function done() {
      var label = button.lastChild;
      label.textContent = 'Copied';
      button.classList.add('is-copied');
      setTimeout(function () { label.textContent = 'Copy link'; button.classList.remove('is-copied'); }, 1800);
    }
    function fallback() {
      var box = el('textarea', { style: 'position:fixed;opacity:0' });
      box.value = text;
      document.body.appendChild(box);
      box.select();
      try { document.execCommand('copy'); done(); } catch (e) { window.prompt('Copy this link:', text); }
      document.body.removeChild(box);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
  }

  function linkRow(title, meta, url) {
    var copyButton = el('button', { type: 'button', class: 'btn btn-primary btn-sm' }, UI.icon('check'), 'Copy link');
    copyButton.addEventListener('click', function () { copy(url, copyButton); });
    return [
      el('div', { class: 'link-info' },
        el('div', { class: 'link-title', text: title }),
        meta ? el('div', { class: 'link-meta', text: meta }) : null,
        el('a', { class: 'link-url', href: url, text: url.replace(/^https?:\/\//, '') })
      ),
      el('div', { class: 'link-actions' },
        copyButton,
        el('a', { class: 'btn btn-outline btn-sm', href: url, target: '_blank', rel: 'noopener' }, 'Open')
      )
    ];
  }

  var home = document.getElementById('home-link');
  linkRow('Student home page', 'Lists every review for both grades', absolute('index.html').replace(/index\.html$/, ''))
    .forEach(function (node) { home.appendChild(node); });

  var list = document.getElementById('links');
  [6, 7].forEach(function (grade) {
    var reviews = WDMS.catalog.filter(function (r) { return r.grade === grade; });
    list.appendChild(el('div', { class: 'section-heading' },
      el('h2', { text: 'Grade ' + grade }),
      el('span', { text: reviews.length ? reviews.length + (reviews.length === 1 ? ' review' : ' reviews') : '' })
    ));
    if (!reviews.length) {
      list.appendChild(el('div', { class: 'empty', style: 'padding:26px 20px' }, el('p', { text: 'No Grade ' + grade + ' reviews yet. Links will appear here as reviews are added.' })));
      return;
    }
    reviews.forEach(function (review) {
      var meta = review.subtitle + ' · ' + review.problems + ' problems';
      list.appendChild(el('div', { class: 'link-row' }, linkRow(review.title, meta, absolute(review.id + '/'))));
    });
  });
})();
