const popup = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

closeBtn.addEventListener('click', () => {
  popup.classList.remove('modal_active');
  document.cookie = 'modalClosed=true; expires=Fri, 31 Dec 99 23:59:59 GMT';
});

function checkPopupClosed() {
  return document.cookie.split(';').some(cookie => cookie.trim() === 'modalClosed=true');
}

window.addEventListener('load', () => {
  if (!checkPopupClosed()) {
    popup.classList.add('modal_active');
  }
});