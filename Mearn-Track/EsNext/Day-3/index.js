import { Square } from "./Square.js";
import { Rectangle } from "./Rectangle.js";

const sq1 = new Square(5);
const rec1 = new Rectangle(5, 6);

sq1.toString();
rec1.toString();

const validateDataSet = {
  set: (obj, property, val) => {
    switch (property) {
      case "name":
        if (val.length === 7 && typeof val === "string") {
          return (obj[property] = val);
        } else {
          throw "Invalid name inputs";
        }
        break;
      case "addres":
        if (typeof val === "string") {
          return (obj[property] = val);
        } else {
          throw "Invalid address inputs";
        }
        break;
      case "age":
        if (typeof val === "number" && val >= 25 && val <= 60) {
          return (obj[property] = val);
        } else {
          throw "Invalid age inputs";
        }
        break;

      default:
        throw "invalid proprty name";
    }
  },
};

const p = new Proxy({}, validateDataSet);
p.name = "abdelsl";
console.log(p.name);

function* fiponaci(count) {
  let first = 0;
  let second = 1;
  while (!count) {
    yield first;
    let cur = first;
    first = second;
    second = cur + second;
  }
  if (count) {
    for (let i = first; i < count; i = i + second) {
      yield i;
      second += i;
    }
  }
}

const f1 = fiponaci();
const f2 = fiponaci(28);

console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());

console.log(f2.next());
console.log(f2.next());
console.log(f2.next());
console.log(f2.next());
console.log(f2.next());
console.log(f2.next());
console.log(f2.next());

function objectIterator() {
  let keys = Object.keys(obj);
  var i = -1;
  return {
    next: function () {
      i++;
      if (i < keys.length) {
        return { value: [keys[i], obj[keys[i]]], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

var obj = {
  name: "abdelslam",
  age: 27,
};
obj[Symbol.iterator] = objectIterator;

console.log(...obj);
