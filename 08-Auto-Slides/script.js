const imgContainer = document.querySelector('.img-container');

const imgs = document.querySelectorAll('img');

let index = 0;
function autoSlide() {
  index++;
  if (index > imgs.length - 1) {
    index = 0;
  }
  imgContainer.style.transform = `translateX(${-index * 600}px)`;
}

setInterval(autoSlide, 2000);
