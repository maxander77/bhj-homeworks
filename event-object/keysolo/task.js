class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.game__timer');
    this.timer = null; 
    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    clearInterval(this.timer); 
  }

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      const enteredSymbol = event.key;

      if (enteredSymbol.toLowerCase() === this.currentSymbol.textContent.toLowerCase()) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
      this.stopTimer();
      this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
      this.stopTimer();
      this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    const wordLength = word.length;

    this.renderWord(word);
    this.startTimer(wordLength);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ];
    const index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  startTimer(wordLength) {
    let timeLeft = wordLength;
    this.timerElement.textContent = timeLeft;

    this.timer = setInterval(() => {
      timeLeft--;
      this.timerElement.textContent = timeLeft;

      if (timeLeft < 0) {
        clearInterval(this.timer);
        alert('Время вышло!');
        this.reset();
      }
    }, 1000);
  }
  
  stopTimer() {
    clearInterval(this.timer);
    this.timerElement.textContent = this.wordElement.textContent.length;
  }
}

new Game(document.getElementById('game'));