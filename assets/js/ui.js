/*
 * ui.js — small helpers shared by every page.
 *
 * Rich text rules used in the review files:
 *   $...$     inline math          $$...$$   math on its own line
 *   \$        a real dollar sign   **bold**  bold text
 *   blank line = new paragraph
 */
(function () {
  'use strict';

  var DOLLAR = '\u0001';

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderMath(tex, display) {
    tex = tex.split(DOLLAR).join('\\$');
    if (!window.katex) return '<code>' + escapeHtml(tex) + '</code>';
    try {
      return window.katex.renderToString(tex, { displayMode: !!display, throwOnError: false, strict: 'ignore' });
    } catch (e) {
      return '<code>' + escapeHtml(tex) + '</code>';
    }
  }

  function renderText(text) {
    return escapeHtml(text)
      .split(DOLLAR).join('$')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  // Text with inline math -> HTML (no paragraphs).
  function inline(source) {
    var parts = String(source).split(/\\\$/).join(DOLLAR).split('$');
    var html = '';
    for (var i = 0; i < parts.length; i++) {
      html += i % 2 === 1 ? renderMath(parts[i], false) : renderText(parts[i]);
    }
    // **bold** that wraps math: handled after the pieces are joined
    return html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  // Full rich text with paragraphs and display math -> HTML.
  function rich(source) {
    var text = String(source).split(/\\\$/).join(DOLLAR);
    var chunks = text.split('$$');
    var html = '';
    for (var i = 0; i < chunks.length; i++) {
      if (i % 2 === 1) {
        html += '<div class="math-block">' + renderMath(chunks[i].trim(), true) + '</div>';
        continue;
      }
      var paragraphs = chunks[i].split(/\n\s*\n/);
      for (var p = 0; p < paragraphs.length; p++) {
        var para = paragraphs[p].trim();
        if (para) html += '<p>' + inline(para.split(DOLLAR).join('\\$')) + '</p>';
      }
    }
    return html;
  }

  // Tiny element builder: el('div', {class: 'x', onclick: fn}, child, child...)
  function el(tag, attrs) {
    var node = document.createElement(tag);
    if (attrs) {
      for (var key in attrs) {
        var value = attrs[key];
        if (value == null || value === false) continue;
        if (key === 'class') node.className = value;
        else if (key === 'html') node.innerHTML = value;
        else if (key === 'text') node.textContent = value;
        else if (key.slice(0, 2) === 'on' && typeof value === 'function') node.addEventListener(key.slice(2), value);
        else node.setAttribute(key, value === true ? '' : value);
      }
    }
    for (var i = 2; i < arguments.length; i++) append(node, arguments[i]);
    return node;
  }

  function append(parent, child) {
    if (child == null || child === false) return;
    if (Array.isArray(child)) { child.forEach(function (c) { append(parent, c); }); return; }
    parent.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }

  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i]; copy[i] = copy[j]; copy[j] = tmp;
    }
    return copy;
  }

  var ICONS = {
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2l.1.7h4.8l.1-.7c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z"/>',
    list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
    shuffle: '<path d="M16 4h4v4M4 20L20 4M20 16v4h-4M14.5 14.5L20 20M4 4l5 5"/>',
    refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',
    home: '<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
    star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.8z"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M2.8 19.5c.5-3.4 3-5.3 6.2-5.3s5.7 1.9 6.2 5.3M16 5.2a3.2 3.2 0 0 1 0 5.8M18.2 14.6c1.7.7 2.8 2.3 3.100 4.9"/>',
    user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c.7-3.9 3.7-6 7.5-6s6.8 2.100 7.5 6"/>',
    sound: '<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5zM15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    mute: '<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5zM16 9.5l5 5M21 9.5l-5 5"/>',
    expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    eye: '<path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/>'
  };

  function icon(name, className) {
    var span = document.createElement('span');
    span.className = 'icon' + (className ? ' ' + className : '');
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '') + '</svg>';
    return span;
  }

  window.UI = { escapeHtml: escapeHtml, inline: inline, rich: rich, math: renderMath, el: el, shuffle: shuffle, icon: icon };
})();
