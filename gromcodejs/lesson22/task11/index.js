const tasks = [
  { text: 'Buy milk', done: true },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];


const renderListItems = listItems => {
  const listElem = document.querySelector(".list");

  const listItemsElems = listItems
  .sort((a, b) => a.done - b.done)
  .map(({text, done}) => {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("list__item");
    listItemElem.setAttribute("data-id", null);
    if (done) {
      listItemElem.classList.add("list__item_done");
    }
    const checkBoxElem = document.createElement("input");
    checkBoxElem.setAttribute("type", "checkbox");
    checkBoxElem.checked = done;
    checkBoxElem.classList.add("list__item-checkbox");
    listItemElem.append(checkBoxElem, text)
    
    return listItemElem;
  });
  
  listElem.append(...listItemsElems);
}

renderListItems(tasks);

const createBtn = document.querySelector('.create-task-btn')
const taskInput = document.querySelector('.task-input')

const createTask = () => {
    if (taskInput.value === "") {
        return;
    };
    tasks.push({
        text: taskInput.value,
        done: false,
        id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1
    });
    taskInput.value = "";
    tasks.value = "";
    // listElem.innerHTML = "";
    renderListItems(tasks);
    tasks.map(el => {
      documentlistItemElem.getAttribute(dataset.id) = el.id;
    });
    console.log(tasks);
}

createBtn.addEventListener('click', createTask);

const checkBox = document.querySelector(`.list__item-checkbox`);

const checkboxClick = (event) => {
  tasks.map(el => {
    if (el.id === target.dataset.id) {
        return {...el, done: true};
      }
      return el;
    })
};

// checkBox.addEventListener("change", checkboxClick);



/*
    algo: 
    1. добавить обработчик на кнопку
    2. внутри обработчика необходимо прочитать значение поля инпут
    3. запушить значение с уникальным айдишником и значением фолс
    4. засунуть ай-ди в дата атрибут
    5. поставить обработчик на чекбокс прочитать его таргет
    6. найти значение ай-ди на кликнутом чекбоксе 
    7. найти чекнутый елемент в массиве таск и поменять ему статус дан
    
*/ 
    // tasks.push({
    //   text: Input.value, 
    //   done: false,
    //   id: Math.random(),
    // })