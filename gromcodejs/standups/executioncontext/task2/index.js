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
/*
1. learn requirements +++
2. create step by step algo (&input/output for functions)
3. create prototype solution
4. testing
5. refactoring
6. final solution
*/ 

function printMessage(age, city) {
  // console.log(this);
  console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`);
}

let user = {
  name: "Alex",
  email: "gmail.com",
}


// printMessage(50, "Kyiv");

// let bindedPrintMessage = printMessage.bind(user);
// bindedPrintMessage(50, "Kyiv");

//input: func, obj
//output: func with bind

// function myBind1(func, context) {
//   return func.bind(context);
// }

// let bindedPrintMessage = myBind(printMessage, user);
// bindedPrintMessage(50, "Kyiv");
//TODO implement it

const myBind2 = (func, context) => {
  context[func.name] = func;
  console.log(context)
  return context[func.name];
}
// user.printMessage = printMessage;
// console.log(user.printMessage(55, "Melbourne"));

let bindedPrintMessage = myBind2(printMessage, user);

// console.log(bindedPrintMessage);
bindedPrintMessage(55, "Lviv");
