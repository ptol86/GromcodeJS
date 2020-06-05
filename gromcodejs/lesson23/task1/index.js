const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");

const emailErrorElem = document.querySelector("error_text_email");
const passwordErrorElem = document.querySelector("error_text_password");

const isRequired = value => value
? undefined 
: "Required";

const isEmail = value => value.includes("@")
? undefined 
: "Should be an email";

const onEmailChange = (event) => {
  const errorText = validate("email", event.target.value);
    emailErrorElem.textContent = errorText;
}

emailInputElem.addEventListener("input", onEmailChange);

const onPasswordChange = (event) => {
  const errorText = validate("password", event.target.value);
    passwordErrorElem.textContent = errorText;
}
const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
} 

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map(validator => (event.target.value))
    .filter(errorText => errorText)
    .join(', ')
}

passwordInputElem.addEventListener("input", onPasswordChange);

const formElem = document.querySelector(".login-form");
 
const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)] 
    .reduce((acc, [field, value]) => ({ ...acc, [field]:[value]}),{}) 
    alert(JSON.stringify(formData));
  }

formElem.addEventListener("submin", onFormSubmit);

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