"use strict";

// Given an array of integers, find if the array contains any duplicates. Your
// function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.

// duplicates([1,2,4,1,,1,5,6])  //true
// duplicates([1,2,4,5,6])//false

const checkDublicates = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) return true;
    }
  }
  return false;
};

console.log(checkDublicates([1, 2, 4, 1, , 1, 5, 6]));
console.log(checkDublicates([1, 2, 4, 5, 6]));

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and
// for the multiples of five output “Buzz”. For numbers which are multiples of
// both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

const checkFizzBuzz = (n) => {};
