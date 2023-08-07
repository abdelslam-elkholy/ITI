"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function NumberGen(x, y) {
        this.x = x;
        this.y = y;
    }
    return NumberGen;
}());
var StringGen = /** @class */ (function () {
    function StringGen(x, y) {
        this.x = x;
        this.y = y;
    }
    return StringGen;
}());
var numClass = new NumberGen(10, 20);
var strClass = new StringGen("a", "b");
console.log(numClass);
console.log(strClass);
var point2D = /** @class */ (function () {
    function point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    point2D.prototype.calcLength = function (point) {
        var dX = this.x - point.x;
        var dY = this.y - point.y;
        var D = Math.sqrt(dX * dX + dY * dY);
        return D;
    };
    return point2D;
}());
var point3D = /** @class */ (function (_super) {
    __extends(point3D, _super);
    function point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.x = x;
        _this.y = y;
        _this.z = z;
        return _this;
    }
    point3D.prototype.calcLength = function (point) {
        var dX = this.x - point.x;
        var dY = this.y - point.y;
        var dZ = this.z - point.z;
        var D = Math.sqrt(dX * dX + dY * dY + dZ * dZ);
        return D;
    };
    return point3D;
}(point2D));
var poin2d1 = new point2D(5, 9);
var poin2d2 = new point2D(3, 7);
console.log(poin2d1.calcLength(poin2d2));
var poin3d1 = new point3D(5, 9, 11);
var poin3d2 = new point3D(3, 7, 9);
console.log(poin3d1.calcLength(poin3d2));
