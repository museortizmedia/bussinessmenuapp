export function Navigate(path) {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  }