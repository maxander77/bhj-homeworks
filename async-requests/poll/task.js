const poll = document.querySelector('.poll');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const jsonResp = JSON.parse(xhr.responseText).data;

        const pollTitle = document.createElement('div');
        pollTitle.classList.add('poll__title');
        pollTitle.textContent = jsonResp.title;
        poll.appendChild(pollTitle);

        jsonResp.answers.forEach(item => {
            const answerButton = document.createElement('button');
            answerButton.classList.add('poll__answer');
            answerButton.textContent = item;
            poll.appendChild(answerButton);

            answerButton.addEventListener('click', () => {
                alert('Спасибо, Ваш голос учтён!');
            });
        });
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
