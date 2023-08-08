const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function submitVote(answerIndex) {
  alert('Спасибо, ваш голос засчитан!');
}

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    const pollData = JSON.parse(xhr.responseText);
    console.log(pollData); 

    if (pollData && pollData.answers && Array.isArray(pollData.answers)) {
      pollTitle.textContent = pollData.question;

      pollData.answers.forEach((answer, index) => {
        const answerButton = document.createElement('button');
        answerButton.classList.add('poll__answer');
        answerButton.textContent = answer;

        answerButton.addEventListener('click', () => {
          submitVote(index);
        });

        pollAnswers.appendChild(answerButton);
      });
    } else {
      console.error('Error');
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
