let tasks = [
  { text: 'Buy milk', done: false, id: '1', addDate: new Date, doneDate: null},
  { text: 'Pick up Tom from airport', done: false, id: '2', addDate: new Date, doneDate: null}, 
  { text: 'Visit party',  done: false, id: '3', addDate: new Date, doneDate: null},
  { text: 'Visit doctor', done: true, id: '4', addDate: new Date, doneDate: null},
  { text: 'Buy meat', done: true, id: '5', addDate: new Date, doneDate: null},
];
const listElem = document.querySelector('.list');
const renderTasks = (tasksList) => {
listElem.innerHTML = '';
  const tasksElems = tasksList
      .slice()
      // .sort((a, b) => b.data - a.data)
      .sort((a, b) => {
        if (a.done - b.done !== 0) {
        return a.done - b.done;
        }
        if (a.done === true) {
          return (b.doneDate - a.doneDate);
        }
          return (b.addDate - a.addDate);
      })
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
      //console.log(tasksElems)
  listElem.append(...tasksElems);
};
renderTasks(tasks);
//update task
listElem.addEventListener('click', updateTask);

// const checkbox = document.querySelector('.list__item-checkbox');

function updateTask(event) {
  
  const classes = event.target.classList;
  
  if(!classes.contains('list__item-checkbox')) return;

  const task = tasks.find(task => task.id === event.target.dataset.taskId);
  
  task.done = !task.done;
  task.addDate = new Date();
  task.doneDate = new Date();

  
  renderTasks(tasks);
  
}
//console.log(task);
  //todo update task
  //updateTask();
  //todo render tasks again
  //renderTasks(tasks);
  //console.log('DONE');
const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createTask);

function createTask(event) {
  console.log(event);
  const input = document.querySelector('.task-input');
if (!input.value) return;
  const newTask = { text: input.value, done: false, id: `${tasks.length + 1}`, addDate: new Date, doneDate: null}
  tasks.push(newTask)
  input.value = '';
  renderTasks(tasks);
}