export const squaredNumbers = () => {
  document.querySelectorAll(".number").forEach((el) => {
    const squaredNumber = el.dataset.number**2;
    el.dataset.squaredNumber = squaredNumber;
  });
  
}

squaredNumbers();