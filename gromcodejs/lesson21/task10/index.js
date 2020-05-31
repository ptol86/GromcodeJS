
export const finishForm = () => {
  const form = document.querySelector(".login-form");

  const changeAttribute = form.querySelector('input[type="text"]');
  console.log(changeAttribute);
  changeAttribute.setAttribute("type", "password");

  const login = document.createElement("input");
  login.setAttribute("type", "text"); 
  login.setAttribute("name", "login");
  form.prepend(login);

}

// finishForm();