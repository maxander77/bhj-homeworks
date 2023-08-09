const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      loader.classList.remove('loader_active');

      const jsonResponse = JSON.parse(xhr.responseText);
      const itemsContainer = document.getElementById('items');
      itemsContainer.innerHTML = '';

      const valuteData = jsonResponse.response.Valute;

      for (const code in valuteData) {
        const valute = valuteData[code];

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const codeDiv = document.createElement('div');
        codeDiv.classList.add('item__code');
        codeDiv.textContent = code;

        const valueDiv = document.createElement('div');
        valueDiv.classList.add('item__value');
        valueDiv.textContent = valute.Value;

        const currencyDiv = document.createElement('div');
        currencyDiv.classList.add('item__currency');
        currencyDiv.textContent = 'руб.';

        itemDiv.appendChild(codeDiv);
        itemDiv.appendChild(valueDiv);
        itemDiv.appendChild(currencyDiv);

        itemsContainer.appendChild(itemDiv);
      }
    } else {
      loader.classList.add('loader_active');
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
