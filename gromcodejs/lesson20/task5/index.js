export class User {
  constructor(id, name, sesssionId) {
    this._id = id;
    this._name = name;
    this._sesssionId = sesssionId;
  }
  get getId() {
    return this._id;
  }
  get getName() {
    return this._name;
  }
  get getSesssionId() {
    return this._sesssionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  getUsers() {
    return this._users;
  }
  getUserNames() {
    let arr = [];
    for (let user of this._users) {
      arr.push(user.getName);
    }
    return arr;
  }
  getUserIds() {
    let arr = [];
    for (let user of this._users) {
      arr.push(user.getId);
    }
    return arr;
  }
  getUserNameById(id) {
    for (let user of this._users) {
      if (user.getId === id) {
        return user.getName;
      }
    }
  }
}

// ar.forEach( function(user) { ar2.push(user.getName()); } );
// myArray.find(x => x.id === '45').foo;

// let user = new User("123", "Lexa", "assd");
// let user2 = new User("1213", "Lexaa", "a2ssd");

// console.log(user);
// console.log(user.getId);

// let repository = new UserRepository([user, user2]);

// console.log(repository.getUserNames());
// console.log(repository.getUserIds());
// console.log(repository.getUserNameById("123"));
