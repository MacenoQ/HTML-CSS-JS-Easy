const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const popupContainer = document.querySelector('.popup-container');

openBtn.addEventListener('click', () => {
  popupContainer.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  popupContainer.classList.remove('active');
});
