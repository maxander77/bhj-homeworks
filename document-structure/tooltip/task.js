const titleTexts = document.querySelectorAll('.has-tooltip');
const mainClue = document.querySelector('.tooltip');

titleTexts.forEach(titleText => {
  titleText.addEventListener('click', (event) => {
    event.preventDefault();

    const text = titleText.getAttribute('title');
    mainClue.textContent = text;

    if (mainClue.classList.contains('tooltip_active')) {
      mainClue.classList.remove('tooltip_active');
    } else {
      mainClue.classList.add('tooltip_active');
    
      const rect = titleText.getBoundingClientRect();
      const tooltipHeight = mainClue.offsetHeight;
      const topPosition = rect.top + rect.height + 5;
      const leftPosition = rect.left;

      mainClue.style.top = `${topPosition}px`;
      mainClue.style.left = `${leftPosition}px`;
   }
  });
});
