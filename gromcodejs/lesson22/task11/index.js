// 1. create array of tasks - and create 5 test tasks +++
// 2. write renderTasks (tasks) fucn that render all tasks +++
// 3. addEventListener for .list +++
// 4. addEventListener for create button+++
// 5. checkbox handler - update task in the array and render tasks
// 6. create handler - create task object and put to the array and render tasks +++

let tasks = [
  { text: 'Buy milk', done: false, id: "1"},
  { text: 'Pick up Tom from airport', done: false, id: "2"}, 
  { text: 'Visit party',  done: false, id: "3"},
  { text: 'Visit doctor', done: true, id: "4"},
  { text: 'Buy meat', done: true, id: "5"},
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
listElem.innerHTML = '';
  const tasksElems = tasksList
      .slice()
      .sort((a, b) => a.done - b.done)
      .map((task) => {
          const listItemElem = document.createElement('li');
          listItemElem.classList.add('list__item');
          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.setAttribute('data-task-id', task.id);
          checkbox.checked = task.done;
          checkbox.classList.add('list__item-checkbox');
          if (task.done) {
              listItemElem.classList.add('list__item_done');
          }
          listItemElem.append(checkbox, task.text);
          return listItemElem;
      });
      console.log(tasksElems)
  listElem.append(...tasksElems);
};
// renderTasks(tasks);
//update task
listElem.addEventListener('click', updateTask);

function updateTask(event) {
  // console.log(event);
  //console.log(event.target);
  const classes = event.target.classList;
  // console.log(classes)
  if(!classes.contains('list__item-checkbox')) return;
  // console.log(event.target.dataset);
  const task = tasks.find(task => task.id === event.target.dataset.taskId);
  if (task) {
    tasks.map(el => {
      if (el.id == event.target.dataset.taskId) {
        el.done = true;
      }
    });
    renderTasks(tasks);
  }
  // console.log(task);
  //todo update task
  //updateTask();
  //todo render tasks again
  //renderTasks(tasks);
  // console.log('DONE');
}
//renderTasks(tasks);
const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createTask);

function createTask(event) {
  // console.log(event);
  const input = document.querySelector('.task-input');
if (!input.value) return;
  const newTask = {
      text: input.value,
      done: false,
      id: toString(Math.floor(Math.random() * (1000 - 1 + 1)) + 1),
  }
  tasks.push(newTask);
  input.value = '';
  renderTasks(tasks);
  // console.log(tasks); 
}



// /*
//     algo: 
//     1. добавить обработчик на кнопку
//     2. внутри обработчика необходимо прочитать значение поля инпут
//     3. запушить значение с уникальным айдишником и значением фолс
//     4. засунуть ай-ди в дата атрибут
//     5. поставить обработчик на чекбокс прочитать его таргет
//     6. найти значение ай-ди на кликнутом чекбоксе 
//     7. найти чекнутый елемент в массиве таск и поменять ему статус дан
    
// */ 
//     // tasks.push({
//     //   text: Input.value, 
//     //   done: false,
//     //   id: Math.random(),
//     // })