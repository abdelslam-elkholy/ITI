"use strict";

const welcomeMessage = () => {
  const userName = location.search.split("=")[1].split("&")[0];
  console.log(userName);

  document.write(`Welcome ${userName}`);
};

welcomeMessage();
