(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('quan-shi-theme'); } catch (_) { /* Storage is optional. */ }
  const applyTheme = (dark) => {
    root.dataset.theme = dark ? 'dark' : 'light';
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      const label = dark ? 'Switch to light theme' : 'Switch to dark theme';
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
      toggle.setAttribute('aria-pressed', String(dark));
    }
  };
  applyTheme(savedTheme ? savedTheme === 'dark' : systemTheme.matches);
  systemTheme.addEventListener('change', (event) => {
    if (!savedTheme) applyTheme(event.matches);
  });
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(root.dataset.theme === 'dark');
    document.getElementById('theme-toggle').addEventListener('click', () => {
      savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(savedTheme === 'dark');
      try { localStorage.setItem('quan-shi-theme', savedTheme); } catch (_) { /* Storage is optional. */ }
    });
  });
})();
