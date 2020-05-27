export class Wallet {
  constructor() {
    this._balance = 0;
  }
  getBalance() {
    return this._balance;
  }
  deposit(amount) {
    this._balance += amount;
  }
  withdraw(amount) {
    if (amount > this._balance) {
      alert("Not enough funds");
      return;
    }
    this._balance -= amount;
  }
}

// const wallet1 = new Wallet();
// console.log(wallet1._balance);