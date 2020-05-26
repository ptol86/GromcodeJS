"use strict";

//input: function;
//output: creating arr calls of arguments function withMemory, returning function withMemory;

function saveCalls(func) {
  withMemory.calls = [];
  function withMemory() {
    withMemory.calls.push([...arguments])
    return func(...arguments);
  }

  return withMemory;
};

  
function test(a, b) {
  return a + b;
}

const testWithMemory = saveCalls(test);
console.log(testWithMemory(5, 2));
console.log(testWithMemory.calls);