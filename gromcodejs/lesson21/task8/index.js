
export const finishList = () => {
  const listElements = document.querySelector(".list");
  const firstEl = document.createElement("li");
  firstEl.textContent = "1";
  listElements.prepend(firstEl);

  const eightEl = document.createElement("li");
  eightEl.textContent = "8";
  listElements.appendChild(eightEl);

  const specialEl = document.querySelector(".special");
  
  const fourEl = document.createElement("li");
  fourEl.textContent = "4";
  specialEl.before(fourEl);

  const sixEl = document.createElement("li");
  sixEl.textContent = "6";
  specialEl.after(sixEl);
    
 }

// finishList();


