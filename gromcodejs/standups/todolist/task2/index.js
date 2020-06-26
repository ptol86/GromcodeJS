import { renderTasks } from './render.js'
import { getTasks } from './gateway.js'


getTasks()
    .then(tasks => renderTasks(tasks));