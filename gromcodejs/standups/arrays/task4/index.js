//demo

// let arr = [5, 6 , 7 ,10];

// console.log(...arr);

// for (let i = 0; i <arr.length; i++) {
//     console.log(arr[i]);
// }

// function sum(a, b, ...args) {
//     console.log(a);
//     console.log(b);
//     console.log(args);
// }

// sum(40, 30, 32, 'dsdsd', 'hello');

//task
//input: number, number .... number
//output: number

//algo: - 
function multiply(...numbers) {
   return numbers.reduce((acc, el) => acc * el);
}

// function multiply2() {
//    let args = arguments;
//    console.log(args);

//    let arr = new Array(...args);
//    console.log(args);

//    return [...args].reduce((acc, el) => acc * el);

// }

