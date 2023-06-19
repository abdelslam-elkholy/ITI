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
  let coockie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    ?.split("=")[1];
};

var CookieLibrary = {
  getCookie: function (cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(";");
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  },

  setCookie: function (cookieName, cookieValue, expiryDate) {
    var expires = "";
    if (expiryDate) {
      var date = new Date();
      date.setTime(date.getTime() + expiryDate * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
  },

  deleteCookie: function (cookieName) {
    document.cookie =
      cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },

  allCookieList: function () {
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(";");
    var cookies = [];
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      cookies.push(cookie);
    }
    return cookies;
  },

  hasCookie: function (cookieName) {
    var cookieValue = this.getCookie(cookieName);
    return cookieValue !== "";
  },
};
