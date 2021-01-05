"use strict";
//a)
function reverseArr(arr) {
    let res = arr.reverse();
    return res;
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
//console.log(reverseArr<number>(["a","b","c"]));
//b)
// class DataHolder<T>{
//     _thing: T
//     constructor(thing:T){
//         this._thing = thing;
//     }
//     setValue(e): T {return this._thing = e}
//     getValue(): T {return this._thing}
// }
//c) Rewritten
class DataHolder {
    constructor(thing) {
        this._thing = thing;
    }
    set value(e) { this._thing = e; }
    get value() { return this._thing; }
}
let d = new DataHolder("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);
let d2 = new DataHolder(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
//# sourceMappingURL=generics.js.map