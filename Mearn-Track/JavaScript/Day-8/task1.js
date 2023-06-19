"use strict";

// const submitBtn = document.getElementById("submit");

const setCookie = function (key, val, date) {
  date && (date = new Date().getDate() + 3);
  document.cookie = `${key} = ${val} ; expires = ${date}`;
};

const hasCoocie = (name) => {
  let coockie = document.cookie.split("; ").find((row) => row.startsWith(name));
  return coockie !== "";
};

const getCookie = (name) => {
  let coockie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    .split("=")[1];
  console.log(coockie);
  return coockie;
};

const deleteCookie = (name) => {
  document.cookie = `${name} =; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
};

let fname;
let age;
let gender;
let color;

const getData = () => {
  fname = document.getElementById("name").value;
  age = document.getElementById("age").value;
  gender = document.querySelector('input[name="gender"]:checked').value;
  color = document.getElementById("colors").value;

  console.log(fname, age, gender, color);

  if (fname && age && gender && color) {
    setCookie("name", fname);
    setCookie("age", age);
    setCookie("gender", gender);
    setCookie("color", color);
    location.href = "./welcome.html";
  }
};

let visits = 1;
const displayData = () => {
  const div = document.querySelector(".showDiv");
  if (hasCoocie("visits")) {
    visits = Number(getCookie("visits")) + 1;
    setCookie("visits", visits);
  } else {
    setCookie("visits", visits);
  }
  div.innerHTML = ` welcome <span style = "color: ${getCookie(
    "color"
  )}"> ${getCookie("name")}</span>
  your age is ${getCookie("age")} 
  <img src="${
    getCookie("gender") == "male" ? "./Img/1.jpeg" : "./Img/2.jpeg"
  }" />
  this is your visit number ${visits}`;
};
