import { LikesComponent } from "./likes-component";

const numVariable: number = 25;
const str: string = "John";
const bol: boolean = true;

let uni: number | string;

uni = 1;
console.log(uni);

uni = "str";
console.log(uni);

function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

const response: StatusCode = StatusCode.Success;
console.log(response);

interface CircleShape {
  radius: number;
  calculateArea(): number;
}

class Circle implements CircleShape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(15);
console.log(circle.calculateArea());

function gen<T>(arg: T): T {
  return arg;
}
console.log(gen("sas"));
console.log(gen(5));

const likes = new LikesComponent(false, 9);
console.log(likes.likesCount);
console.log(likes.isSelected);
likes.onClick();
console.log(likes.likesCount);
console.log(likes.isSelected);

interface gener<T> {
  x: T;
  y: T;
}

class NumberGen implements gener<number> {
  constructor(public x: number, public y: number) {}
}
class StringGen implements gener<string> {
  constructor(public x: string, public y: string) {}
}

const numClass = new NumberGen(10, 20);
const strClass = new StringGen("a", "b");
console.log(numClass);
console.log(strClass);

class point2D {
  constructor(protected x: number, protected y: number) {}

  calcLength(point: point2D): number {
    const dX = this.x - point.x;
    const dY = this.y - point.y;
    const D = Math.sqrt(dX * dX + dY * dY);
    return D;
  }
}

class point3D extends point2D {
  constructor(public x: number, public y: number, public z: number) {
    super(x, y);
  }

  calcLength(point: point3D): number {
    const dX = this.x - point.x;
    const dY = this.y - point.y;
    const dZ = this.z - point.z;
    const D = Math.sqrt(dX * dX + dY * dY + dZ * dZ);
    return D;
  }
}

const poin2d1 = new point2D(5, 9);
const poin2d2 = new point2D(3, 7);

console.log(poin2d1.calcLength(poin2d2));

const poin3d1 = new point3D(5, 9, 11);
const poin3d2 = new point3D(3, 7, 9);

console.log(poin3d1.calcLength(poin3d2));
