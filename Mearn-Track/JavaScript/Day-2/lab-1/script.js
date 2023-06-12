"use strict";

let word;
let count = 0;
do {
  word = prompt("Enter your String");
} while (!word || !isNaN(word));

for (let i = 0; i < word.length; i++) {
  if (word[i].toLowerCase() === "e") {
    count++;
  }
}

document.write(`Numbers of e is ${count}`);

let caseSen = prompt("for case sensetive enter 1");

function isPalindrome(str) {
  if (caseSen == 1) {
    const reversedStr = str.split("").reverse().join("");
    str === reversedStr
      ? console.log("The string is not a palindrome.")
      : console.log("The string is not a palindrome.");
  } else {
    const origStr = str.toLowerCase();
    const reversedStr = origStr.split("").reverse().join("");

    origStr === reversedStr
      ? console.log("The string is a palindrome.")
      : console.log("The string is not a palindrome.");
  }
}

isPalindrome(word);
