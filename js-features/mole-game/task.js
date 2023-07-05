const deadHole = document.getElementById('dead');
const missHole = document.getElementById('lost');
let counterDead = 0;
let counterMiss = 0;


function getHole(index) {
  return document.getElementById(`hole${index}`);
}


for (let i = 1; i < 10; i++) {
  const hole = getHole(i);
  hole.addEventListener('click', () => {
    if (hole.classList.contains('hole_has-mole')) {
      counterDead++;
      deadHole.textContent = counterDead;

      if (counterDead === 10) {
        alert('You Win!');
        resetGame();
      }
    } else {
      counterMiss++;
      missHole.textContent = counterMiss;

      if (counterMiss === 5) {
        alert('Game Over :(');
        resetGame();
      }
    }
  })
};


function resetGame() {
  counterDead = 0;
  counterMiss = 0;
  deadHole.textContent = counterDead;
  missHole.textContent = counterMiss;
}