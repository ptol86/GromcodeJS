
const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
export const getTasksList = () => {
  return fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks')
  .then(response => response.json())
 
}
// console.log(getTasksList());

export const getTaskById = taskId => {
  return getTasksList()
  .then(task => task[taskId-1]);
}

// console.log(getTaskById(1));