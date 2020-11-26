const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('body-off');
  toggleBtn.classList.toggle('off');
  changeContent();
});

function changeContent() {
  if (toggleBtn.innerHTML === 'light-mode') {
    toggleBtn.innerHTML = 'dark-mode';
  } else {
    toggleBtn.innerHTML = 'light-mode';
  }
}
