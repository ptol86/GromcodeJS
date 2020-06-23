const baseUrl = "https://5ef08e01ad6d71001617a596.mockapi.io/api/v1/users";


const emailInputElem = document.querySelector("#email");
const userNameInputElem = document.querySelector("#name");
const passwordInputElem = document.querySelector("#password");
const submitBtn = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");
const errorElem = document.querySelector(".error-text");

const formInputElem = [...document.querySelectorAll(".form-input")];

const userData = {
  email: "",
  name: "",
  password: "",
}

const isValid = () => {
  formElem.reportValidity() 
  ? submitBtn.disabled = false 
  : submitBtn.disabled = true;
  // errorElem.textContent = '';
}

const onFieldChange = (field) => {
    field.addEventListener("change", () => {
      userData[field.name] = field.value;
      isValid();
    })
}


onFieldChange(emailInputElem);
onFieldChange(userNameInputElem);
onFieldChange(passwordInputElem);

const onEmailChange = event => {
    userData.email = event.target.value;
    
};



const createUser = obj => {
  return fetch(baseUrl, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),

  })
    .then(response => response.json())
    .then(result => {
      formInputElem.map(elem => elem.value = '');
      submitBtn.disabled = true;
      alert(JSON.stringify(result))
    })
    .catch(() => {
      errorElem.innerHTML = "Failed to create user";
    });
       
};

formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    createUser(userData);
})

