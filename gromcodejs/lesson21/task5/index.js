
export const setButton = (buttonText) => {
  const body = document.querySelector("body");
  // const bodyElem = document.createElement("button");
  return body.innerHTML = `<button>${buttonText}</button>`;
  // body.append(bodyElem);
  
 }

//  setButton("some text");


