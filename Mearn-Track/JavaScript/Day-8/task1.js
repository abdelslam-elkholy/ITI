"use strict";

// const submitBtn = document.getElementById("submit");

const setCookie = function (key, val, date) {
  !date && (date = new Date().getDate() + 3);
  document.cookie = `${key} = ${val} ; expires = ${date}`;
};

const hasCookie = (name) => {
  let coockie = document.cookie.split("; ").find((row) => row.startsWith(name));
  console.log(coockie);

  return coockie ? coockie : 0;
};

const getCookie = (name) => {
  let coockie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    .split("=")[1];
  //   console.log(coockie);
  return coockie;
};

const deleteCookie = (name) => {
  setCookie(name, "", "Thu, 01 Jan 1970 00:00:00 UTC");
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

// deleteCookie("visits");
let visits = 1;

const displayData = () => {
  const div = document.querySelector(".showDiv");
  if (hasCookie("visits")) {
    console.log("im working from has coocke");
    visits = Number(getCookie("visits")) + 1;
    setCookie("visits", visits);
  } else {
    setCookie("visits", visits);
  }

  let color = getCookie("color");
  let name = getCookie("name");
  let gender = getCookie("gender");
  let age = getCookie("age");

  let imageSrc = gender == "male" ? "./Img/1.jpeg" : "./Img/2.jpeg";

  //   div.innerHTML = ` welcome <span style = "color: ${getCookie(
  //     "color"
  //   )}"> ${getCookie("name")}</span>
  //   your age is ${getCookie("age")}
  //   <img src="${
  //     getCookie("gender") == "male" ? "./Img/1.jpeg" : "./Img/2.jpeg"
  //   }" />`;
  //   this is your visit number ${visits}`;

  div.innerHTML = `
welcome <span style = "color: ${color}" >  ${name} </span> 
your age is  <span style = "color: ${color}" >  ${age} </span> 
<img   src = ${imageSrc} alt = ${gender}/>

this is your visit number ${visits}

`;
};
