"use strict";

const messageBtn = document.getElementById("message-btn");
console.log(messageBtn);

const showMessage = () => {
  const text = `Hey im your text in the new window`;
  const windowMessage = window.open("", "_blank", "width=500,height=300");
  let count = 0;

  // const newDiv = document.createElement("div");
  const typeMessage = setInterval(() => {
    // newDiv.textContent += text[count];
    // windowMessage.document.body.appendChild(newDiv);

    windowMessage.document.write(`${text[count]}`);
    count++;

    if (count >= text.length) {
      clearInterval(typeMessage);
      setTimeout(windowMessage.close(), 1000);
    }
  }, 200);
};

messageBtn.addEventListener("click", showMessage);
