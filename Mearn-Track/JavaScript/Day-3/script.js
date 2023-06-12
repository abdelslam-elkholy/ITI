"use script";

const displayTime = () => alert(`Time IS: ${new Date().toLocaleTimeString()}`);

let win;

const displayWindow = () => {
  setTimeout(() => {
    win = window.open("", "MsgWindow", "width=200,height=100");
    win.document.write(
      "<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>"
    );
  }, 3000);
};

const closeWindow = () => win.close();

////////////////////////////////////////////////////////////////

let userName;
let phoneNum;
let mobileNum;
let mail;
let color;
let colorCheck;
const userNameRegex = /[a-z A-Z]{3,}/;
const phoneNumRegex = /[0-9]{8}/;
const mobileNumRegex = /^(010|011|012)[0-9]{8}$/;
const mailRegex = /^[a-zA-Z]{3,9}(@123.com)$/;

do {
  userName = prompt("enter your name: ");
} while (!userNameRegex.test(userName));

do {
  phoneNum = prompt("enter phone number: ");
} while (!phoneNum.test(phoneNum));

do {
  mobileNum = prompt("enter mobile number: ");
} while (!mobileNum.test(mobileNum));

do {
  mail = prompt("enter Email: ");
} while (!mailRegex.test(mail));

do {
  color = prompt("enter Color: ");

  colorCheck = color.toLocaleLowerCase();
} while (
  colorCheck !== "red" ||
  colorCheck !== "green" ||
  colorCheck !== "blue"
);
