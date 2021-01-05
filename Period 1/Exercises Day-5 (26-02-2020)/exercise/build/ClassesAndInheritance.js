"use strict";
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() { return this._color; }
    ;
    set color(col) { this._color = col; }
    ;
    toString() { return `area: ${this.area} perimeter: ${this.perimeter} color: ${this.color}  `; }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    get radius() { return this._radius; }
    ;
    set radius(rad) { this._radius = rad; }
    ;
    get area() { return 3.14 * this._radius ^ 2; }
    get perimeter() { return 3.14 * (2 * this._radius); }
}
let circ = new Circle("red", 10);
console.log(circ.toString());
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get volume() { return this.area * this._height; }
    get height() { return this._height; }
    ;
    set height(h) { this._height = h; }
    get perimeter() {
        throw new Error("Method not implemented.");
    }
}
let cyl = new Cylinder("blue", 12, 20);
console.log(cyl.toString());
function reverseArr(arr) {
    let res = arr.reverse();
    return res;
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
console.log(reverseArr(["a", "b", "c"]));
//# sourceMappingURL=classesAndInheritance.js.map