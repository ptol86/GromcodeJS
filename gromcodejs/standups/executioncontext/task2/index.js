function printMessage(age, city) {
  console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`);
}

let user = {
  name: "Alex",
  email: "gmail.com",
}

function myBind(func, context) {
  let copyContext = {...context};
  copyContext[func.name] = func;
  console.log(func.name)
  return (...args) => {
    copyContext[func.name](...args)
  }
}



function myBindWithApply(func, context) {
  return function(...args) {
    let funcResult = func.apply(context, args);
    return funcResult;
  }
}

const bindedPrintMessage = myBindWithApply(printMessage, user);

bindedPrintMessage(33, "Kyiv");
