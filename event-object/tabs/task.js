const tabButtons = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    const selectedTab = event.target;
    const selectedTabIndex = Array.from(tabButtons).indexOf(selectedTab);

    tabButtons.forEach((tabButton, index) => {
      tabButton.classList.toggle('tab_active', index === selectedTabIndex);
      tabContents[index].classList.toggle('tab__content_active', index === selectedTabIndex);
    });
  });
});