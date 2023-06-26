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
        end += steps;
        this.length++;
        return list;
      } else {
        throw new Error("not valid Number ");
      }
    };

    this.unshift = function (item) {
      if (list[0] - item == steps) {
        for (let i = this.length; i > 0; i--) {
          list[i] = list[i - 1];
        }
        list[0] = item;
        start -= steps;
        this.length++;
        return list;
      } else {
        throw new Error("not valid Number ");
      }
    };

    this.pop = function () {
      const lastItem = list[this.length - 1];

      delete list[this.length - 1];
      end -= steps;
      this.length--;
      return lastItem;
    };

    this.shift = function () {
      const firstItem = list[0];
      this.length--;
      for (let i = 0; i < this.length - 1; i++) {
        list[i] = list[i + 1];
      }
      delete list[this.length];
      start += steps;

      return firstItem;
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

// newlist.push(15);
newlist.push(16);
console.log(newlist.getList());
console.log(`this is the list length ` + newlist.length);

newlist.unshift(0);
console.log(newlist.getList());
console.log(`this is the list length ` + newlist.length);

newlist.pop();
console.log(newlist.getList());
console.log(`this is the list length ` + newlist.length);

newlist.shift();
console.log(newlist.getList());
console.log(`this is the list length ` + newlist.length);

function Shape(x, y) {
  if (this.constructor == Shape) {
    throw "This is Abstract";
  }
  this.width = x;
  this.height = y;
  Shape.count = (Shape.count ? Shape.count : 0) + 1;
}

Shape.prototype.getCount = function () {
  return Shape.count;
};

Rectangle.prototype = Object.create(Shape.prototype);
function Rectangle(width, height) {
  Shape.call(this, width, height);
}

Rectangle.prototype.calcArea = function () {
  return this.height * this.width;
};

Rectangle.prototype.constructor = Rectangle;

const rec1 = new Rectangle(5, 7);
const rec2 = new Rectangle(5, 7);
const area = rec1.calcArea();
console.log(area);
let count = rec2.getCount();
console.log(count);
let count2 = rec1.count;
