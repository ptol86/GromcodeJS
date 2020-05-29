export class User {
  #id;
  #name;
  #sesssionId;

  constructor(id, name, sesssionId) {
    this.#id = id;
    this.#name = name;
    this.#sesssionId = sesssionId;
  }
  getId() {
    return this.#id;
  }
  getName() {
    return this.#name;
  }
  getSesssionId() {
    return this.#sesssionId;
  }
}

export class UserRepository {
  #users;
  constructor(users) {
    this.#users = Object.freeze(users);
  }
  getUsers() {
    return this.#users;
  }
  getUserNames() {
    let arr = [];
    for (let user of this.#users) {
      arr.push(user.getName());
    }
    return arr;
  }
  getUserIds() {
    let arr = [];
    for (let user of this.#users) {
      arr.push(user.getId());
    }
    return arr;
  }
  getUserNameById(id) {
    for (let user of this.#users) {
      if (user.getId() === id) {
        return user.getName();
      }
    }
  }
}

// ar.forEach( function(user) { ar2.push(user.getName()); } );
// myArray.find(x => x.id === '45').foo;

// let user = new User("123", "Lexa", "assd");
// let user2 = new User("1213", "Lexaa", "a2ssd");

// console.log(user);
// console.log(user.getId());

// let repository = new UserRepository([user, user2]);

// console.log(repository.getUserNames());
// console.log(repository.getUserIds());
// console.log(repository.getUserNameById("123"));
