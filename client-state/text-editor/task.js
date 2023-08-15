const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
  localStorage.setItem('editorContent', editor.value);
});

window.addEventListener('load', () => {
  const savedText = localStorage.getItem('editorContent');
  if (savedText) {
    editor.value = savedText;
  }
});