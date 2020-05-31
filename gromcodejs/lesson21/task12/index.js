export const squaredNumbers = () => {
  const list = Array.from(document.querySelectorAll(".number"));

  list.forEach((el) => {
    const squaredNumber = el.dataset.number**2;
    el.dataset.squaredNumber = squaredNumber;
  });
  
}

squaredNumbers();