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

const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(fruits.every((str) => typeof str == "string"));

console.log(fruits.some((str) => str.startsWith("a")));

console.log(
  fruits.filter(
    (str) =>
      str.toLowerCase().startsWith("b") || str.toLowerCase().startsWith("s")
  )
);

const newFruits = fruits.map((str) => `I like ${str}`);

newFruits.forEach((str) => console.log(str));
