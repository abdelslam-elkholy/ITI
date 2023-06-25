"use strict";

function List(st, en, ste) {
  if (!isNaN(st) && !isNaN(en) && !isNaN(ste) && en > st + ste) {
    let start = st;
    let end = en;
    let steps = ste;

    this.length = 0;
    const list = {};

    function fillList() {
      let i = 0;
      let item = start;
      this.length = 0;
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
      if (newEnd > start + steps) {
        end = newEnd;
        fillList.call(this);
      } else {
        throw new Error("not valid end ");
      }
    };

    this.setNewStart = function (newStart) {
      if (newStart < end - steps) {
        start = newStart;
        fillList.call(this);
      } else {
        throw new Error("not valid start ");
      }
    };

    this.setNewSteps = function (newSteps) {
      if (newSteps > 0 && newSteps + start > end) {
        steps = newSteps;
        fillList.call(this);
      } else {
        throw new Error("not valid start ");
      }
    };

    this.push = function (item) {
      if (item - list[this.length - 1] == steps) {
        list[this.length] = item;
        this.length++;
        return list;
      } else {
        throw new Error("not valid Number ");
      }
    };

    this.unshift = function (item) {
      if (list[0] - item == steps) {
        list[this.length] = list[this.length - 1];
        for (let i = this.length - 1; i > 0; i--) {
          list[i] = list[i - 1];
        }
        list[0] = item;
        this.length++;
      } else {
        throw new Error("not valid Number ");
      }
    };
  } else {
    throw new Error("enter valid end start steps");
  }
}

const newlist = new List(2, 10, 2);
// const newlist2 = new List(20, 10, 2);
// newlist.fillList();
// console.log(newlist);
console.log(newlist.getList());
console.log(`this is the list length ` + newlist.length);

newlist.setNewEnd(12);
console.log(newlist.getList());
console.log(`this is the list length ` + newlist.length);

newlist.setNewEnd(13);
console.log(newlist.getList());
console.log(`this is the list length ` + newlist.length);

newlist.setNewEnd(14);
console.log(newlist.getList());
console.log(`this is the list length ` + newlist.length);
