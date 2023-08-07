var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var _this = this;
// Decorator with explicit propertyKey type
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        if (descriptor) {
            descriptor.configurable = value;
        }
    };
}
var Point = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _get_x_decorators;
    var _get_y_decorators;
    return _a = /** @class */ (function () {
            function Point(x, y) {
                this._x = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this._x = x;
                this._y = y;
            }
            Object.defineProperty(Point.prototype, "x", {
                get: function () {
                    return this._x;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Point.prototype, "y", {
                get: function () {
                    return this._y;
                },
                enumerable: false,
                configurable: true
            });
            return Point;
        }()),
        (function () {
            _get_x_decorators = [configurable(false)];
            _get_y_decorators = [configurable(false)];
            __esDecorate(_a, null, _get_x_decorators, { kind: "getter", name: "x", static: false, private: false, access: { has: function (obj) { return "x" in obj; }, get: function (obj) { return obj.x; } } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _get_y_decorators, { kind: "getter", name: "y", static: false, private: false, access: { has: function (obj) { return "y" in obj; }, get: function (obj) { return obj.y; } } }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
var point1 = new Point(3, 7);
// point1.x = 5
// // @experimentalDecorators
// function sealed(constructor: Function) {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// }
// @sealed
// class BugReport {
//   type = "report";
//   title: string;
//   constructor(t: string) {
//     this.title = t;
//   }
// }
// const bug1 = new BugReport("failed");
