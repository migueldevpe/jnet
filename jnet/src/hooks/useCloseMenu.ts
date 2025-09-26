export default function closeMenu() {
  const ocMenu = document.getElementById('mobile-menu') as HTMLButtonElement;
  const menu = document.getElementById('menu') as HTMLElement;
  const overlay = document.getElementById('overlay') as HTMLElement;

  if (window.innerWidth <= 500) {

    menu.classList.toggle('show');
    overlay.classList.toggle('active');

    if (ocMenu.classList.contains('active')) {
      ocMenu.classList.remove('active');
      ocMenu.classList.add('closing');
    } else {
      ocMenu.classList.remove('closing');
      ocMenu.classList.add('active');
    }

  }
}