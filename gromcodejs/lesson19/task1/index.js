"use strict";

//input: function;
//output: creating arr calls of arguments function withMemory, returning function withMemory;


export const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const ship = {
  name: "Argo",
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  
};

Object.setPrototypeOf(ship, vehicle);
