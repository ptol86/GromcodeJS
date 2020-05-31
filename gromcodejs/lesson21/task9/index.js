
export const getItemsList = () => {
  const etemsList = document.querySelectorAll(".technology");
  console.dir(etemsList);
  return etemsList;
}

// getItemsList();

export const getItemsArray = () => {
  const itemsArray = Array.from(document.querySelectorAll(".tool"));
  console.dir(itemsArray);
  return itemsArray;
}

// getItemsArray();

