class Order {
  constructor(price, city, type) {
    this.id = toString(Math.random());
    this.price = price;
    this.dateCreated = new Date;
    this.isConfirmed = false;
    this.dateConfirmed = new Date;
    this.city = city;
    this.type = type;
  };
  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    else return false;
  };
  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date;
  };
  isValidType() {
    if (this.type === "Buy" || this.type === "Sell") {
      return true;
    }
    else return false;
  };
};
