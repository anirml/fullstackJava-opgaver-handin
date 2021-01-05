abstract class Shape {
    private _color: string;
    constructor(color: string) {
        this._color = color;
    }
    get color(): string { return this._color };
    set color(col: string) { this._color = col };
    abstract get area(): number ;
    abstract get perimeter(): number;
    toString(): string { return `area: ${this.area} perimeter: ${this.perimeter} color: ${this.color}  ` }
}


class Circle extends Shape {
    _radius: number;
    constructor(color: string, radius: number) {
        super(color)
        this._radius = radius;
    }
    get radius():number {return this._radius};
    set radius(rad:number) {this._radius = rad};
    get area():number {return 3.14 * this._radius^2}
    get perimeter():number {return 3.14 * (2* this._radius)}
}

let circ = new Circle("red", 10)

console.log(circ.toString()) 

class Cylinder extends Circle {
    _height: number;
    constructor(color:string, radius:number, height:number){
        super(color,radius);
        this._height = height;
    }
    get volume():number {return this.area*this._height}
    get height():number {return this._height};
    set height(h:number) {this._height = h}
    get perimeter(): number {
        throw new Error("Method not implemented.");
    }
}

let cyl = new Cylinder("blue",12,20)

console.log(cyl.toString()) 
