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

    while (item <= end) {
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

  this.setNewEnd = function (newEnd) {
    // console.log(newEnd, start + steps);
    if (newEnd != end && newEnd > start + steps) {
      end = newEnd;
      fillList.call(this);
    } else {
      throw new Error("not valid end ");
    }
  };
}

const newlist = new List(2, 10, 2);
// newlist.fillList();
// console.log(newlist);
console.log(newlist.getList());
console.log(`this is the list length ` + newlist.length);
newlist.setNewEnd(12);
console.log(newlist.getList());
newlist.setNewEnd(12);
