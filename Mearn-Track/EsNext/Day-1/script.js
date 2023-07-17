"use strict";

let a = 10;
let b = 5;
[a, b] = [b, a];

console.log(a);
console.log(b);

const maxMinFun = function (arr) {
  return [Math.max(...arr), Math.min(...arr)];
};

console.log(maxMinFun([1, 4, 7, 9, 5, 3]));

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(fruits.every((str) => typeof str == "string"));

console.log(fruits.some((str) => str.startsWith("a")));

console.log(fruits.filter((str) => str.startsWith("b") || str.startsWith("s")));

console.log(fruits.map((str) => `I like ${str}`));

fruits.forEach((str) => console.log(str));
