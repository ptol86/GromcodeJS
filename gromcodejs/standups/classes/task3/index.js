export class Sportsman {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`)
  }
}


export class Swimmer extends Sportsman {
  constructor(name, breaststroke) {
    super(name);
    this.breaststroke = breaststroke;
  }
  swim() {
    console.log(`${this.name} is swimming ${this.breaststroke}`)
  }
}

// let a = new Swimmer("john", "breast");

// a.swim();
