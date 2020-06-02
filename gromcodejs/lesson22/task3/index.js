'use strict';

const textInput = document.querySelector(`input[type="text"`);

const returnInput = () => {
    console.log(textInput.value);
};

textInput.addEventListener("change", returnInput);
