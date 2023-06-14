"use script";

document.addEventListener("keydown", (ev) => {
  alert(ev.keyCode);
  console.log(ev.keyCode);
});

document.addEventListener("contextmenu", (ev) => {
  ev.preventDefault();
});
