const counterElement = document.getElementById('clicker__counter');
const imageElement = document.getElementById('cookie');
const speedElement = document.getElementById('speed__clicker')

let count = 0;
let isEvenClick = false;
let originalWidth = '200px';
let lastClickTime = null;


function countCookies() {
  count++;
  counterElement.textContent = count;
}

function updateImageSize() {
  const width = imageElement.style.width;

  if (isEvenClick) {
    imageElement.style.width = (parseInt(width) + 20) + 'px';
  } else {
    imageElement.style.width = originalWidth;
  }

  isEvenClick = !isEvenClick;
}

function updateClickSpeed() {
  const currentTime = new Date();

  if (lastClickTime) {
    const timeDiff = (currentTime - lastClickTime) / 1000;
    const clickSpeed = 1 / timeDiff;
    speedElement.textContent = clickSpeed.toFixed(2);
  }

  lastClickTime = currentTime;
}

imageElement.onclick = () => {
  countCookies();
  updateImageSize();
  updateClickSpeed();
}