import { renderTasks } from './render.js'
import { getTasks } from './gateway.js'
import { onCreateTask } from './createTask.js'


getTasks()
    .then(tasks => renderTasks(tasks));

const createBtnElem = document.querySelector(".create-task-btn");
createBtnElem.addEventListener("click", onCreateTask);