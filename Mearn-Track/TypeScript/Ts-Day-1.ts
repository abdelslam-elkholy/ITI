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

// Interfaces & Classes & Inheritance
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
console.log(gen("asas"));
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
