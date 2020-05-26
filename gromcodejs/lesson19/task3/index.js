"use strict";


export function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
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
