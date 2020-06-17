// classes

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    sayHi = function () {
      console.log(`Hi, I am ${this.name}`);
    }
    requestNewPhoto = function () {
      console.log(`New photo request was sent for ${this.name}`);
    }
    
    setAge = function (value) {
      if(value < 0) {
        return false;
      }
      this.age = value;
      if(value >= 25) {
        this.requestNewPhoto();
      }
      if(value >= 0) {
      return value;
      }
    }
  }
}

let user = new User("Vasya", 50);
console.log(user);
user.sayHi();
user.setAge(-26)