export function registerCommandKey() {
  document.addEventListener('keydown', event => {
    if (event.key === 'Tab' && event.shiftKey) {
      event.preventDefault();
      console.log('Shift+Tab pressed');
    }
  });
}
