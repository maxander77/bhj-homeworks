const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
  const valueElement = dropdown.querySelector('.dropdown__value');
  const listElement = dropdown.querySelector('.dropdown__list');
  const itemElements = dropdown.querySelectorAll('.dropdown__item');

  valueElement.addEventListener('click', () => {
    listElement.classList.toggle('dropdown__list_active');
  });

  itemElements.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      listElement.classList.remove('dropdown__list_active');

      valueElement.textContent = item.textContent;
    });
  });
});
