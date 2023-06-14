"use strict";
// let userName;
// let phoneNum;
// let mobileNum;
// const mobileNumRegex = /^(010|011|012)\d{8}$/;
// do {
//   userName = prompt("enter your name: ");
// } while (!userName || !isNaN(userName));

// do {
//   phoneNum = prompt("enter phone number: ");
// } while (!phoneNum || phoneNum.length < 8 || isNaN(phoneNum));

// do {
//   mobileNum = prompt("enter mobile number: ");
// } while (!phoneNum || !mobileNumRegex.test(mobileNum));

const fillingArr = (num) => {
  let arr = [];
  let el;

  for (let i = 0; i < num; i++) {
    el = prompt(`Enter the element number ${i + 1}`);
    arr.push(el);
  }

  let sum = 0;
  let multi = 1;
  let div = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
    multi *= arr[i];
    div /= arr[i];
  }

  div *= arr[0];

  document.write(
    `<p style="color: red; font-size: 1.5rem"> sum of 3 values <span style="black: red; font-size: 1rem">${arr.toString(
      "+"
    )} </span> is ${sum}</p> <p style="color: red; font-size: 1.5rem"> multiplication of 3 values <span style="black: red; font-size: 1rem">${arr.toString(
      "*"
    )} </span> is ${multi}</p><p style="color: red; font-size: 1.5rem"> divistion of 3 values <span style="black: red; font-size: 1rem">${arr.toString(
      "/"
    )} </span> is ${div}</p>`
  );

  console.log(arr.sort((a, b) => a - b));
  console.log(arr.sort((a, b) => b - a));
};

fillingArr(3);
// let arr = [];
// let el;
// for (let i = 0; i < 3; i++) {
//   el = prompt(`Enter the element number ${i + 1}`);
//   arr.push(el);
// }

/////////////////////////////////////////

// let radius = prompt("Enter circle radius");
// alert(`The area = ${Math.PI * radius ** 2}`);

// let sqrt = Number(prompt("Enter number"));
// alert(`the sqrt of ${sqrt} is ${Math.sqrt(sqrt)}`);

// let angle = Number(prompt("Enter number"));
// alert(`the cos of ${angle} is ${Math.cos(angle)}`);
