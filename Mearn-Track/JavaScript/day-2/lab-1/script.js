"use strict";

let word;
let count = 0;
do {
  word = prompt("Enter your String");
} while (!word || !isNaN(word));

for (let i = 0; i < userInput.length; i++) {
  if (userInput[i].toLowerCase() === "e") {
    count++;
  }
}

console.log(`Numbers of e is ${count}`);
