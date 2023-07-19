import { Shape } from "./Shape.js";

export class Square extends Shape {
  constructor(x) {
    super(x, x);
  }

  toString() {
    console.log(
      `Area is ${this.calculateArea()} and parameters are (${this.height} )`
    );
  }
}
