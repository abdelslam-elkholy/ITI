"use strict";
const btn = document.getElementById("submit");
let date = new Date();
date = date.getDate() + 3;
console.log(date);

// const setCookFun = function (key, value) {};

const setCookie = function (key, val) {
  document.cookie = `${key} = ${val} ; expires = ${date}`;
};

btn.addEventListener("click", function () {
  const nameU = document.getElementById("name");
  const age = document.getElementById("age");
  const gender = document.querySelector('input[name="gender"]:checked');
  const color = document.getElementById("colors");
  setCookie("username", nameU.value);
  setCookie("age", age.value);
  setCookie("gender", gender.value);
  setCookie("color", color.value);
});
