document.addEventListener('DOMContentLoaded', () => {
  const signIn = document.getElementById('signin');
  const form = document.getElementById('signin__form');
  const welcome = document.getElementById('welcome');
  const signinBtn = document.getElementById('signin__btn');
  const userId = document.getElementById('user_id');
  const editor = document.getElementById('editor'); 

  const getUserId = localStorage.getItem('userId');
  if (getUserId) {
    welcome.classList.add('welcome_active');
    userId.textContent = getUserId;
  }

  signinBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const loginInputs = document.getElementsByName('login');
    const passwordInputs = document.getElementsByName('password');
    
    const login = loginInputs[0].value;
    const password = passwordInputs[0].value; 
    
    const formData = new FormData();
    formData.append('login', login);
    formData.append('password', password); 

    try {
      const xhr = new XMLHttpRequest();

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const data = xhr.response;
          
          localStorage.setItem('userId', data.id);

          welcome.classList.add('welcome_active');
          userId.textContent = data.id;
          
          form.reset();
        } else {
          console.error('Error');
        }
      });

      xhr.responseType = 'json';

      xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
      xhr.send(formData);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });

  editor.addEventListener('input', () => {
    localStorage.setItem('editorContent', editor.value);
  });

  const savedText = localStorage.getItem('editorContent');
  editor.value = savedText;
});