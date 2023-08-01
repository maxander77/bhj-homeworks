const titleTexts = document.querySelectorAll('.has-tooltip');
const mainClue = document.querySelector('.tooltip');

titleTexts.forEach(titleText => {
  titleText.addEventListener('click', (event) => {
    event.preventDefault();

    const text = titleText.getAttribute('title');
    mainClue.textContent = text;
    mainClue.classList.add('tooltip_active');

    const rect = titleText.getBoundingClientRect();
    mainClue.style.top = rect.top + 'px';
    mainClue.style.left = rect.left + 'px';
  });
});
