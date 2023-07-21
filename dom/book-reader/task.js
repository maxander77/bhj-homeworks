const switchA = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

function switchBtn(event) {
  event.preventDefault(); 

  const clickedElement = event.target;

  switchA.forEach(element => {
    element.classList.remove('font-size_active');
  });

  clickedElement.classList.add('font-size_active');
  
  book.classList.remove('book_fs-small', 'book_fs-big');

  const size = clickedElement.getAttribute('data-size');
  if (size === 'small') {
    book.classList.add('book_fs-small');
  } else if (size === 'big') {
    book.classList.add('book_fs-big');
  }
}

switchA.forEach(element => {
  element.addEventListener('click', switchBtn);
});

const textColors = document.querySelectorAll('.book__control_color');
const bgColors = document.querySelectorAll('.book__control_background');

function switchColor(event) {
  event.preventDefault();

  const clickedElement = event.target;

  if (clickedElement.hasAttribute('data-text-color')) {
    const textColor = clickedElement.getAttribute('data-text-color');
    book.style.color = textColor;

    textColors.forEach(element => {
      element.classList.remove('color_active');
    });

    clickedElement.classList.add('color_active');
  }

  if (clickedElement.hasAttribute('data-bg-color')) {
    const bgColor = clickedElement.getAttribute('data-bg-color');
    book.style.backgroundColor = bgColor;

    bgColors.forEach(element => {
      element.classList.remove('color_active');
    });

    clickedElement.classList.add('color_active');
  }
}

textColors.forEach(element => {
  element.addEventListener('click', switchColor)
});

bgColors.forEach(element => {
  element.addEventListener('click', switchColor)
});