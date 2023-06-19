"use strict";
// const btn = document.getElementById("submit");
// let date = new Date();
// date = date.getDate() + 3;
// console.log(date);

// // const setCookFun = function (key, value) {};

// const setCookie = function (key, val) {
//   document.cookie = `${key} = ${val} ; expires = ${date}`;
// };

// btn.addEventListener("click", function () {
//   const nameU = document.getElementById("name");
//   const age = document.getElementById("age");
//   const gender = document.querySelector('input[name="gender"]:checked');
//   const color = document.getElementById("colors");
//   setCookie("username", nameU.value);
//   setCookie("age", age.value);
//   setCookie("gender", gender.value);
//   setCookie("color", color.value);
// });

// // CookieLibrary.js

const setCookie = function (key, val, date) {
  date && (date = new Date().getDate() + 3);
  document.cookie = `${key} = ${val} ; expires = ${date}`;
};

const getCookie = (name) => {
  let coockie = hasCoocie(name)?.split("=")[1];
  return coockie;
};

const deleteCookie = (name) => {
  document.cookie = `${name} =; expires = expires=Thu, 01 Jan 1970 00:00:00 UTC`;
};

const hasCoocie = (name) => {
  let coockie = document.cookie.split("; ").find((row) => row.startsWith(name));
  return coockie !== "";
};
