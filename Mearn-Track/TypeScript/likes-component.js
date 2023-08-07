"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesComponent = void 0;
var LikesComponent = /** @class */ (function () {
    function LikesComponent(_isSelected, _likesCount) {
        this._isSelected = _isSelected;
        this._likesCount = _likesCount;
    }
    LikesComponent.prototype.onClick = function () {
        this._likesCount += this._isSelected ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikesComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikesComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    return LikesComponent;
}());
exports.LikesComponent = LikesComponent;
