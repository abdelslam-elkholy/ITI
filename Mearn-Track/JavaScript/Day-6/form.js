"use strict";

const form = document.querySelector("#form");
const tableBody = document.querySelector("#tbody");
const addBtn = document.querySelector("#addBtn");
const resetBtn = document.querySelector("#resetBtn");

addBtn.addEventListener("click", () => {
  const fName = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const mail = document.querySelector("#email").value;

  if (fName && age && mail) {
    const row = `
    <tr>        
    <td>${fName}</td>
    <td>${age}</td>
    <td>${mail}</td>
    </tr>
    `;
    tableBody.appendChild(row);
    form.reset();
  } else {
    alert("Fill Data");
  }
});
