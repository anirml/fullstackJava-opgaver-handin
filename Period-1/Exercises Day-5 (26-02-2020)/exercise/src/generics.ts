
//a)
function reverseArr<T>(arr:Array<T>){
    let res = arr.reverse()
    return res
}

console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
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
class DataHolder<T>{
    _thing: T
    constructor(thing:T){
        this._thing = thing;
    }
    set value(e: T) {this._thing = e}
    get value(): T {return this._thing}
}

let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);