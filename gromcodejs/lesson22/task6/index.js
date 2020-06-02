'use strict';

const btn = document.querySelector(`.single-use-btn`);

const clicked = () => {
    console.log("clicked");
    btn.removeEventListener("click", clicked);
};

btn.addEventListener("click", clicked);
