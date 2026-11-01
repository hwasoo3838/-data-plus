document.querySelectorAll('.submenu-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const open = !item.classList.contains('menu-open');
    document.querySelectorAll('.submenu-toggle').forEach(other => {
      other.parentElement.classList.remove('menu-open');
      other.setAttribute('aria-expanded', 'false');
    });
    item.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
  });
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('.submenu-toggle').forEach(button => {
    if (button.parentElement.classList.contains('menu-open')) {
      button.parentElement.classList.remove('menu-open');
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    }
  });
});
document.addEventListener('click', event => {
  if (event.target.closest('header .gnb')) return;
  document.querySelectorAll('.submenu-toggle').forEach(button => {
    button.parentElement.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
  });
});
