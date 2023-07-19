const rotator = document.querySelector('.rotator');
const rotatorAll = document.querySelectorAll('.rotator__case');

const totalCases = rotatorAll.length;
let currentIndex = 0;


function rotateCases() {
  rotatorAll[currentIndex].classList.remove('rotator__case_active');

  currentIndex++;

  if (currentIndex >= totalCases) {
    currentIndex = 0;
  }

  rotatorAll[currentIndex].classList.add('rotator__case_active');

  const textColor = rotatorAll[currentIndex].getAttribute('data-color');
  if (textColor) {
    rotator.style.color = textColor;
  }

  const interval = rotatorAll[currentIndex].getAttribute('data-speed');
  if (interval) {
    clearInterval(timer);
    timer = setInterval(rotateCases, interval);
  }
}

timer = setInterval(rotateCases, 1000);


