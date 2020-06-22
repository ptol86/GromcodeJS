const setButton = (buttonText) => {
  // part 1  
  // const button = `<button>${buttonText}</button>`;

    // document.querySelector("body").innerHTML = button;
    const button = document.createElement("button");
    button.textContent = buttonText;
    
    document.querySelector("body").append(button);
  }

setButton();