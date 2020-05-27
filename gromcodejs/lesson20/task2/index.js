export class Vehicle {
  constructor(name, numberOfWheels) {
    this.numberOfWheels = numberOfWheels;
    this.name = name;
  }
  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
};

export class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, false);
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log(`${this.name} lifting anchor up`);;
    super.move();
  }
  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
  
};

// const ship = new Ship("Aurora", 21);
// console.log(ship);
// ship.move();