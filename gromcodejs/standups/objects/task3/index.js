//input: two obj
//output: true/false
//1. compare two obj by length
//2. iterate keys and compare values. If not equal - return false

function compareObjects(obj1, obj2) {
   let keys1 = Object.keys(obj1);
   let keys2 = Object.keys(obj2);
 
   if (keys1.length !== keys2.length) {
     return false;
   }
   
   return keys1.reduce((acc, key, index) => {
     if (acc === false)
       return false;
 
     return obj1[key] === obj2[key];
   }, true);
 }
 
 let obj1 = {
   age: 20,
   name: "Andrey",
   city: "Kiev",
   location: "Kiev",
 }
 
 let obj2 = {
   age: 20,
   name: "Andrey",
   city: "Kiev",
   location: "Kiev",
 }
 
//  console.log(compareObjects(obj1, obj2));
  