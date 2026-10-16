// Light/dark toggle. Default follows the system setting; a choice is remembered on this device.
(function () {
  var root = document.documentElement;
  var key = 'lt-theme';
  try { var saved = localStorage.getItem(key); if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved); } catch (e) {}
  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function label(btn) {
    var next = current() === 'dark' ? 'light' : 'dark';
    btn.textContent = next === 'dark' ? 'Dark mode' : 'Light mode';
    btn.setAttribute('aria-label', 'Switch to ' + next + ' mode');
  }
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    label(btn);
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(key, next); } catch (e) {}
      label(btn);
    });
  });
})();
