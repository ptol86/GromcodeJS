
export const finishForm = () => {
  const form = document.querySelector(".login-form");
  const login = document.createElement("input");
  login.setAttribute("type", "text"); 
  login.setAttribute("name", "login");
  form.prepend(login);

  const changeAttribute = document.querySelector('input[name="password"]');
  console.log(changeAttribute);
  changeAttribute.setAttribute("type", "password");
}

finishForm();