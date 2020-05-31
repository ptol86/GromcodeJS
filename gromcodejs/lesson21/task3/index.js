
export const getTitle = () => {
  const elem = document.querySelector(".title");
  console.log(elem.textContent);
  return elem.textContent;
}

// getTitle();

export const getDescription = () => {
  const elem = document.querySelector(".about");
  console.log(elem.innerText);
  return elem.innerText;
}

// getDescription();

export const getPlans = () => {
  const elem = document.querySelector(".plans");
  console.log(elem.innerHTML);
  return elem.innerHTML;
}

// getPlans();

export const getGoal = () => {
  const elem = document.querySelector(".goal");
  console.log(elem.innerHTML);
  return elem.outerHTML;
}

// getGoal();


