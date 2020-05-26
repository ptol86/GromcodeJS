'use strict';
// input: object, string;
//output: object;

function addPropertyV1(userData, userId) {
   userData.id = userId;
   return userData;
}

function addPropertyV2(userData, userId) {
   Object.assign(userData, {id: userId});
   return userData;
}

function addPropertyV3(userData, userId) {
      return Object.assign({}, userData, {id: userId});
   
}

function addPropertyV4(userData, userId) {
  let resObj = {...userData, id: userId};
      return resObj;
   
}

let userData = {
   name: "Andrey",
   city: "Lviv",
   age: 20,
};

let userId = "1111";
// let obj = {userId};
console.log(addPropertyV4(userData, userId));
// console.log(obj);
console.log(userData);


