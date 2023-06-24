"use strict";

function List(st, en, ste) {
  let start = st;
  let end = en;
  let steps = ste;

  this.length = 0;
  const list = {};

  function fillList() {
    let i = 0;
    let item = start;
    // console.log(`loop number ${i + 1}`);
    while (item <= end) {
      //   console.log(`loop number ${i + 1}`);
      list[i] = item;
      this.length++;
      item += steps;
      i++;
    }
  }

  fillList.call(this);

  this.getList = function () {
    return list;
  };
}

const newlist = new List(2, 10, 2);
// newlist.fillList();
// console.log(newlist);
console.log(newlist.getList());
console.log(`this is the list length ` + newlist.length);
