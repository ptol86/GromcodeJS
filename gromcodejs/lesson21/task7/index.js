
export const createButton = (buttonText) => {
  const body = document.querySelector("body");
  const bodyElem = document.createElement("button");
  bodyElem.textContent = buttonText;
  body.append(bodyElem);
  
 }

 createButton("some text");


