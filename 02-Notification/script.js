const clickBtn = document.querySelector('.click-btn');
const container = document.querySelector('.container');

clickBtn.addEventListener('click', () => {
  showNotification();
});

function showNotification() {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.innerHTML = 'Nice to Meet You';
  container.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 2000);
}
