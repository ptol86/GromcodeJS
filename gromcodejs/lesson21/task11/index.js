export const manageClasses = () => {
  const first = document.querySelector(".one");
  first.classList.add("selected");

  const two = document.querySelector(".two");
  two.classList.remove("selected");

  const three = document.querySelector(".three");
  three.classList.toggle("three_done");

  const four = document.querySelector(".four");
  if ([...four.classList].includes("some-class")) {
  four.classList.toggle("another-class");
  }
}

// manageClasses();
