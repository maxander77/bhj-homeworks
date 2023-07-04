const timerElement = document.getElementById('timer');
let seconds = 60;

function currentTimer(time) {
  const hours = Math.floor(time / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function goTimer() {
  seconds --;
  timerElement.textContent = currentTimer(seconds);

  if (seconds === 0) {
    clearInterval(timerId);
    alert("Вы победили в конкурсе!")
  }
}

const timerId = setInterval(goTimer, 1000);





