'use strict';

const checkBox = document.querySelector(`input[class="task-status"]`);

const checkboxClick = (event) => {
    console.log(event.target.checked);
};

checkBox.addEventListener("change", checkboxClick);