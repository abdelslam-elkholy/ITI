"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likes_component_1 = require("./likes-component");
var numVariable = 25;
var str = "John";
var bol = true;
var uni;
uni = 1;
console.log(uni);
uni = "str";
console.log(uni);
function addNumbers(num1, num2) {
    return num1 + num2;
}
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
var response = StatusCode.Success;
console.log(response);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var circle = new Circle(15);
console.log(circle.calculateArea());
function gen(arg) {
    return arg;
}
console.log(gen("asas"));
console.log(gen(5));
var likes = new likes_component_1.LikesComponent(false, 9);
console.log(likes.likesCount);
console.log(likes.isSelected);
likes.onClick();
console.log(likes.likesCount);
console.log(likes.isSelected);
var NumberGen = /** @class */ (function () {
    function NumberGen(first, second) {
        this.first = first;
        this.second = second;
    }
    return NumberGen;
}());
var StringGen = /** @class */ (function () {
    function StringGen(first, second) {
        this.first = first;
        this.second = second;
    }
    return StringGen;
}());
var numClass = new NumberGen(10, 20);
var strClass = new StringGen("a", "b");
console.log(numClass);
console.log(strClass);
