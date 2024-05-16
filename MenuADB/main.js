const menuButton = document.getElementById('menuButton');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
      menu.style.opacity = 1;
    } else {
      menu.style.opacity = 0;
    }
}

const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
  icon.classList.toggle('active');
});