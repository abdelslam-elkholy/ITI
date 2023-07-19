export class Shape {
  constructor(x, y) {
    this.height = x;
    this.width = y;
  }

  calculateArea() {
    return this.height * this.width;
  }

  calculatePerimeter() {
    return (this.height + this.width) * 2;
  }

  toString() {
    console.log(
      `Area is ${this.calculateArea()} and parameters are (${this.height} , ${
        this.width
      })`
    );
  }
}
