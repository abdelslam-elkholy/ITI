"use strict";

function acceptTwo(a, b) {
  if (arguments.length !== 2) {
    // throw new Error("hey you need two params");
    console.log("hey you need two params");
  }
  //   console.log(arguments.length);
  console.log(arguments);
}

acceptTwo("a", "b");
acceptTwo("a");

function addingNums(a) {
  if (arguments.length != 1 || isNaN(arguments[0])) {
    console.log("err");
  }
}

addingNums("a");

function reverse1(args) {
  const backWards = [];

  for (let i = arguments.length - 1; i >= 0; i--) {
    backWards.push(arguments[i]);
  }

  console.log(backWards);
  return backWards;
}

reverse1(1, 2, 3, 4);
