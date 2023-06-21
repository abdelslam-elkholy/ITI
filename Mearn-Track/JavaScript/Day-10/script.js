"use strict";

// Given an array of integers, find if the array contains any duplicates. Your
// function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.

// duplicates([1,2,4,1,,1,5,6])  //true
// duplicates([1,2,4,5,6])//false

const checkDublicates = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    for (let j = i + 1; j > arr.length; j++) {
      console.log(arr[i]);
      console.log(arr[j]);
      return arr[i] == arr[j] ? true : false;
    }
  }
};

checkDublicates([1, 2, 4, 1, , 1, 5, 6]);
checkDublicates([1, 2, 4, 5, 6]);
