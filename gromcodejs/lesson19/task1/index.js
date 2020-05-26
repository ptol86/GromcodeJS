"use strict";

//input: function;
//output: creating arr calls of arguments function withMemory, returning function withMemory;

export function saveCalls(func) {
  withMemory.calls = [];
  function withMemory() {
    withMemory.calls.push([...arguments])
    return func.call(this);
  }
  return withMemory;
};

  
  //   function test(a, b) {
    //     return a + b;
    // }

    // const testWithMemory = saveCalls(test);
    // console.log(testWithMemory(5, 2));
    // testWithMemory(9, 1);
    // console.log(testWithMemory.calls);
 
//     // testWithMemory.calls // [ [4, 2], [9, 1] ]

//     // /* Поддержка функций с контекстом */

// const user = {
//   name: 'John',
//   sayHi() {
//       return this.name;
//   }
// };

// const methodWithMemory = saveCalls(user.sayHi);
// console.log(methodWithMemory);
// console.log(methodWithMemory.apply({ name: 'Tom' })); // 'Tom'

// console.log(methodWithMemory.calls) // [ [] ]