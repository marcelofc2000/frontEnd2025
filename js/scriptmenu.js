document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburguesa');
  const menu = document.getElementById('menuResponsive');

  btn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });

  // Para cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
});