document.addEventListener('DOMContentLoaded', function () {
  const menuPane = document.getElementById('menuPane');
  if (menuPane) {
      menuPane.style.display = 'flex';
      // Remove any inline styles that might be overriding our CSS
      menuPane.style.removeProperty('position');
      menuPane.style.removeProperty('left');
      menuPane.style.removeProperty('top');
      menuPane.style.removeProperty('z-index');
  }
});
