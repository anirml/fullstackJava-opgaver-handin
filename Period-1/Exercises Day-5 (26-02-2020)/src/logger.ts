function logger(a:number,b:string){
    console.log(`Number value 1: ${a}, String value 2: ${b}`)
}

let a = 12
let b = "Hello World"
logger(a,b)

interface IPerson {name:string}
interface IPersonV2 {fName:string, lName:string, phone?:string}

let p3:IPersonV2 = {fName:"Kurt", lName:"Wonne"}

interface IAddress {address:string}

function loggerV2(a:IPerson,b:IAddress){
    console.log(`Person: ${JSON.stringify(a)}, Address: ${b.address}`)
}

let person:IPerson;
person = {name:"Kurt"}
let address:IAddress = {address:"Vejen 11"}

loggerV2(person,address);

class Person implements IPerson {
    constructor(private _name:string){};
    get name(){return this._name}
    set name(val:string){this._name = val}
}

let p = new Person("Kurt Wonne")
p.name = "Hanne Wonne"
loggerV2(p,address)

function loggerV3<T,U>(a:T,b:U){
    console.log(`Val1: ${JSON.stringify(a)}, Val2: ${JSON.stringify(b)}`)
}
loggerV3<number,string>(a,b);

class GenericLogger<T,U>{
    log = (a:T,b:U) => console.log(`Val1: ${JSON.stringify(a)}, Val2: ${JSON.stringify(b)}`)
}

const logger1 = new GenericLogger<number,string>();
const logger2 = new GenericLogger<IPerson,IAddress>();

logger1.log(a,b)

logger2.log(person,address)