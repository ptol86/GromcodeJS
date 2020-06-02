'use strict';

const inputField = document.querySelector(`.search__input`);

const searchBtn = document.querySelector(`.search__btn`);

const returnInput = () => {
    console.log(inputField.value);
};

searchBtn.addEventListener("click", returnInput);
