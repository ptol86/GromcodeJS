const baseUrl = "https://5ef08e01ad6d71001617a596.mockapi.io/api/v1/users";


const emailInputElem = document.querySelector("#email");
const userNameInputElem = document.querySelector("#name");
const passwordInputElem = document.querySelector("#password");
const submitBtn = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");
const errorElem = document.querySelector(".error-text");

const formInputElem = [...document.querySelectorAll(".form-input")];

const userData = JSON.stringify(Object.fromEntries(new FormData(formElem)))

formElem.addEventListener('input', () => {
  formElem.reportValidity() 
  ? submitBtn.disabled = false 
  : submitBtn.disabled = false;
  errorElem.textContent = '';
})

formElem.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = [...new FormData(formElem)]
      .reduce((acc, [input, value]) => ({...acc, [input]: value }), {});
  fetch(baseUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(result => {
        formInputElem.map(elem => elem.value = '');
        submitBtn.disabled = true;
        alert(JSON.stringify(result))
      })
  .catch(() => errorElem.innerHTML = 'Failed to create user')
});





