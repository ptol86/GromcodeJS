const getSection = (num) => {
  const element = document.querySelector(`span[data-number="${num}"]`);
  const parent = element.closest(".box");
  return parent.dataset.section;
}

console.log(getSection(2));