'use strict';

const taskStatus = document.querySelector(`.task-status`);

const returnStatus = () => {
    console.log(taskStatus.checked);
};

taskStatus.addEventListener("change", returnStatus);
