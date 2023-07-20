"use strict";

class CEO {
  constructor(name) {
    if (!CEO.intstance) {
      this.name = name;
      CEO.intstance = this;
    } else {
      return CEO.intstance;
    }
  }
}

const ceo1 = new CEO("ahmed");
const ceo2 = new CEO("ahm");

console.log(ceo1, ceo2);

class Engine {
  fix() {}
}

class Bike extends Engine {
  fix() {
    console.log("I'm Bike");
  }
}

class Car extends Engine {
  fix() {
    console.log("I'm Car");
  }
}

class Van extends Engine {
  fix() {
    console.log("I'm Van");
  }
}

class EngineFactory {
  constructor(type) {
    this.type = type;
  }

  createEngine() {
    let tpy = this.type;
    tpy = tpy.toLowerCase();
    switch (tpy) {
      case "bike":
        return new Bike();
      case "car":
        return new Car();
      case "van":
        return new Van();
      default:
        return "Engine doesn't exist";
    }
  }
}

const eng1 = new EngineFactory("car");
const engCar = eng1.createEngine();
const eng2 = new EngineFactory("van");
const engVan = eng2.createEngine();
const eng3 = new EngineFactory("c");
const engC = eng3.createEngine();

console.log(engCar, engVan, engC);

class ToyDuck {
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }
}

class ToyCar {
  constructor(color, price, name) {
    this.color = color;
    this.price = price;
    this.name = name;
  }
}

class ToyFactory {
  constructor(type, color, price, name) {
    this.type = type;
    this.color = color;
    this.price = price;
    this.name = name;
  }

  createToy() {
    switch (this.type) {
      case "car":
        return new ToyCar(this.color, this.price, this.name);
      case "duck":
        return new ToyDuck(this.color, this.price);

      default:
        return "toy doesn't exist";
    }
  }
}

const duckToy = new ToyFactory("duck", "green", 100);
const duck = duckToy.createToy();

const carToy = new ToyFactory("car", "blue", 120, "mercedes");
const car = carToy.createToy();

console.log(duck, car);

class ConfigValues {
  constructor(xpoint = 0, ypoint = 0, shape = { y: 0, x: 0 }) {
    return this.getConfiguration(xpoint, ypoint, shape);
  }

  getConfiguration(xpoint, ypoint, shape) {
    if (ConfigValues.intstance) {
      return ConfigValues.intstance;
    } else {
      this.xpoint = xpoint;
      this.ypoint = ypoint;
      this.shape = shape;
      ConfigValues.intstance = this;
    }
  }
}

const shape1 = new ConfigValues(1, 2, { x: 6, y: 7 });
const shape2 = new ConfigValues(5, 7, { x: 8, y: 9 });

console.log(shape1, shape2);
