const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");

const emailErrorElem = document.querySelector(".error-text_email");
const passwordErrorElem = document.querySelector(".error-text_password");

const formElem = document.querySelector("form");


//algo
// 1. validate
// 2. handle submit: gather form data, create obj, show alert
const isRequired = value => value
? undefined 
: "Required";

const isEmail = value => value.includes("@")
? undefined 
: "Should be an email";

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
}; 

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

const onEmailChange = (event) => {
  const errorText = validate("email", event.target.value);
    emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate("password", event.target.value);
  passwordErrorElem.textContent = errorText;
};

const validateEmail = () => {
  
}

const validatePassword = () => {

}

emailInputElem.addEventListener('input', validateEmail);
passwordInputElem.addEventListener('input', validatePassword);

const handleSubmit = (event) => {
  event.preventDefault();
  
  alert(JSON.stringify(Object.fromEntries(new FormData(formElem))));
  
}

formElem.addEventListener("submit", handleSubmit)
// // так можно получить данные формы
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]
// const formData = formFields.reduce(function(acc, formField) {
//     const prop = formField[0]; // здесь "name" инпута
//     const value = formField[0]; // здесь "value" инпута
//     // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//     // const [prop, value] = formField;
//     return {
//         // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//         ...acc,
//         // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//         [prop]: value,
//     };
// }, {});