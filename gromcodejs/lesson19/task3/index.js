"use strict";


 function User(name, age) {
  this.name = name;
  this.age = age;
  this.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
  };
  this.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
  }
  this.setAge = function (newAge) {
    if(newAge >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
  }
    if (newAge > 0) {
    this.age = newAge;
    return newAge;
  }
    else return false;
  }
};
const user2 = new User("Bob", 21);

console.log(user2)