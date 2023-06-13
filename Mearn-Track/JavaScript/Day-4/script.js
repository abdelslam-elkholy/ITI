"use strict";

const messageBtn = document.getElementById("message-btn");
console.log(messageBtn);

const showMessage = () => {
  const message = `Hey im your message in the new window`;
  const windowMessage = window.open("", "_blank", "width=500,height=300");
  const newDiv = document.createElement("div");
  windowMessage.document.body.appendChild(newDiv);

  newDiv.textContent += message[i];
};

messageBtn.addEventListener("click", showMessage);
