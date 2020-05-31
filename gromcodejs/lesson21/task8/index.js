
export const finishList = () => {
  const listElements = document.querySelector(".list");
  const firstEl = document.createElement("li");
  firstEl.textContent = "1";
  listElements.prepend(firstEl);

  const fourEl = document.createElement("li");
  const three = document.querySelector(".three");
  fourEl.textContent = "4";
  three.after(fourEl);

  const sixEl = document.createElement("li");
  const seven = document.querySelector(".seven");
  sixEl.textContent = "6";
  seven.before(sixEl);
  
  const eightEl = document.createElement("li");
  eightEl.textContent = "8";
  listElements.appendChild(eightEl);
 }

finishList();


