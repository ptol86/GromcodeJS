const listItemElem = document.querySelector('.list');

const listItemTextContent = (event) => {
  if (!event.target.classList.contains("list-item")) return;
  console.log(event.target.textContent);
}

listItemElem.addEventListener('click', listItemTextContent)