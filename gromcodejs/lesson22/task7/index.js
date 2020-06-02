'use strict';

const btn = document.querySelectorAll(`.btn`);

const handleClick = (event) => {
    console.log(event.target.textContent);
};
console.log(btn);

btn.forEach(el => el.addEventListener("click", handleClick));
