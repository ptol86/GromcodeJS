'use strict';
// input: object, object;
//output: object;

function mergeObjectsV1(obj1, obj2) {
   return Object.assign(obj1, obj2);
}


function mergeObjectsV2(obj1, obj2) {
    return Object.assign(obj2, obj1);
}

function mergeObjectsV3(obj1, obj2) {
      let resObj = {...obj1, ...obj2};
      return resObj;
   
}

function mergeObjectsV4(obj1, obj2) {
  let resObj = {...obj2, ...obj1};
      return resObj;
   
}

let obj1 = {
   name: "Andrey",
   phone: "123123",
   price: 21111,
};
let obj2 = {
   name: "Denis",
   city: "Lviv",
   age: 20,
};


console.log(mergeObjectsV4(obj1, obj2));



