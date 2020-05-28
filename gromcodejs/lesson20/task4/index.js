class Order {
  constructor(price, city, type) {
    id = toString(Math.random());
    price = price;
    dateCreated = new Date;
    isConfirmed = false;
    dateConfirmed = new Date;
    city = city;
    type = type;
  }
}