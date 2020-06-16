// classes

export function User(name, age) {
  // let user = {};
  // Object.assign(user, {name});
  // Object.assign(user, {age});
  // return user;
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
}
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
}

User.prototype.setAge = function (value) {
  if(value < 0) {
    return false;
  }
  this.age = value;
  if(value > 25) {
    this.requestNewPhoto()
  }
}
let user = new User("Vasya", 50);
console.log(user);
user.sayHi();
user.setAge(-26)