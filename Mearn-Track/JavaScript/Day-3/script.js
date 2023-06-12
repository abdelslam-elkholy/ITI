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
