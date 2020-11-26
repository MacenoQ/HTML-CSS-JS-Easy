const changeBtn = document.getElementById('change-btn');

changeBtn.addEventListener('click', () => {
  document.body.style.background = `rgba(
    ${Math.floor(Math.random() * 360)},
    ${Math.floor(Math.random() * 360)}, 
    ${Math.floor(Math.random() * 360)}, 
    0.5)`;
});
