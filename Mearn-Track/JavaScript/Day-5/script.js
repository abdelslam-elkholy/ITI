"use script";

document.addEventListener("keydown", (ev) => {
  console.log(ev);

  //    else if (evctrlKey == true) {
  //     alert("Ctrl");
  //   } else if (ev.shiftKey == true) {
  //     alert("Shift");
  //   } else {
  //   }
  //   if (ev.altKey == true) {
  //     alert("Alt");
  //   } else if (ev.key == "Shift") {
  //     alert("Shift");
  //   } else if (ev.ctrlKey) {
  //     alert("Ctrl");
  if (ev.altKey || ev.ctrlKey || ev.shiftKey) {
    alert(ev.key);
  } else {
    alert(ev.keyCode);
  }
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
input.addEventListener("focus", () => clearTimeout(timer));
stopSubmition();
