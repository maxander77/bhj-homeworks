document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const progressBar = document.getElementById('progress');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total);
        progressBar.value = progress;
      }
    });

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          alert('Success!');
        } else {
          alert('Error upload');
        }
      }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
  });
});
