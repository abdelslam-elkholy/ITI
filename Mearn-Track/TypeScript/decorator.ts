// Decorator with explicit propertyKey type
function configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor?: PropertyDescriptor
  ) {
    if (descriptor) {
      descriptor.configurable = value;
    }
  };
}

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}

let point1 = new Point(3, 7);
point1.x = 5;
delete point1.x;

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
