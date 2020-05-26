"use strict";


export function User(name, age) {
  this.name = name;
  this.age = age;
}
  User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
  };
  User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
  }
  User.prototype.setAge = function (newAge) {
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