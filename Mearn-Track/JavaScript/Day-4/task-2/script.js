"use strict";

const messageBtn = document.getElementById("message-btn");
console.log(messageBtn);

const showMessage = () => {
  const text = `Hey im your text in the new window`;
  const windowMessage = window.open("", "_blank", "width=500,height=300");
  const newDiv = document.createElement("div");
  let count = 0;

  const typeMessage = setInterval(() => {
    newDiv.textContent += text[count];
    windowMessage.document.body.appendChild(newDiv);
    count++;

    if (count >= text.length) {
      clearInterval(typeMessage);
      windowMessage.close();
    }
  }, 300);
};

messageBtn.addEventListener("click", showMessage);
