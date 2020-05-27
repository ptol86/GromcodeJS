
//1. learn requirements
//2. input & output create algo
//3. create prototype solution
//4. refactoring & testing
//5. final solution 


/*
input: 2 arr
output: obj
algo:
1. iterate keysList
2. get value by index & put to the obj
*/
// function buildObjectDemo(keysList, valueList) {
//     return keysList.reduce((acc, key, index) => {
//         let value = valueList[index];
//         console.log('acc ', acc);
//         console.log('index ' + index);
//         console.log('KEY ' + key);
//         console.log('Value ' + value);
//         let obj = Object.assign(acc, {[key]: valuesList[index]}, {
//             [key]: value
//         });
//         console.log('Obj', obj);
//         console.log();
//         return obj;
//     }, {});
// }
function buildObject(keysList, valuesList) {
   return keysList.reduce((acc, key, index) => {
      return Object.assign(acc, {[key]: valuesList[index]
      });}, {});
};
 

let keys = ['name', 'city', 'price'];
let values = ['Denis', 'Lviv', 300];
console.log(buildObject(keys, values));

// console.log(result); // { name: 'Bob', address: 'Ukraine', age: 56 }

/* demo
let key = "location";
let value = "Kiev";
let obj = {[key]: value};
console.log(obj);
*/