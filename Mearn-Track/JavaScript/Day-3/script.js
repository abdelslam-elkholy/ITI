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

/*
even
\b[02468]+\b

*/
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
} while (!phoneNumRegex.test(phoneNum));

do {
  mobileNum = prompt("enter mobile number: ");
} while (!mobileNumRegex.test(mobileNum));

do {
  mail = prompt("enter Email: ");
} while (!mailRegex.test(mail));

do {
  color = prompt("enter Color: ");
} while (
  color.toLocaleLowerCase() != "red" &&
  color.toLocaleLowerCase() != "green" &&
  color.toLocaleLowerCase() != "blue"
);

document.write(
  `
    <div style= color:${color}>
    <p> Your Name is${userName}</p>
    <p> your Phone is ${phoneNum} </p>
    <p> Your mobile is ${mobileNum}</p>
    <p> your mail is${mail}</p>
    </div>`
);
