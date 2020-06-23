

const buttons = document.querySelectorAll(".btn");

const clickHandler = event => {
  console.log(event.target.textContent)
}

buttons.forEach(btn => btn.addEventListener("click",clickHandler))