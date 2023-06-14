"use script";

document.addEventListener("keydown", (ev) => {
  alert(ev.keyCode);
  console.log(ev.keyCode);
});

document.addEventListener("contextmenu", (ev) => {
  ev.preventDefault();
});

///////////////////////////////////////////////////

const input = document.querySelector("#input");
const btn = document.querySelector("#submit");
let timer;

const stopSubmition = () => {
  timer = setTimeout(() => {
    btn.disabled = true;
  }, 5000);
};

input.addEventListener("input", () => clearTimeout(timer));
stopSubmition();
