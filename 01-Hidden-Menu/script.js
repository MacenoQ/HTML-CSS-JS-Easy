const menuBar = document.querySelector('.menu-bar');
const menuContent = document.querySelector('.menu-content');

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  menuContent.classList.toggle('active');
});
