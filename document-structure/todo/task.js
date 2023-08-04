const btn = document.getElementById('tasks__add');
const inputField = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

btn.addEventListener('click', (event) => {
  event.preventDefault();

  const taskText = inputField.value.trim();

  if (taskText !== '') {
  const newTask = document.createElement('div');
  newTask.classList.add('task');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task__title');
  taskTitle.textContent = taskText;

  const taskRemove = document.createElement('a');
  taskRemove.classList.add('task__remove');
  taskRemove.innerHTML = '&times;';

  taskRemove.addEventListener('click', () => {
    newTask.remove();
  });

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskRemove);

  taskList.appendChild(newTask);

  inputField.value = '';
 
 }
});