const serverUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export const createTask = (taskData) => {
    fetch(serverUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(taskData)
    })
}

const updateTask = (taskData) => {

}

const deleteTask = (taskId) => {

}

export const getTasks = () => {
    return fetch(serverUrl)
        .then(response => {
            return response.json()})
        .catch(error => {
            alert(error);
            return [];
        });
   
}