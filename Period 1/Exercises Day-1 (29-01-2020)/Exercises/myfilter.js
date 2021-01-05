var numbers = [-1,0,5,-4,3]
var names = ["Lars","Holm","Jens","Kristian"]

function myFilterNumbers(numbers,callback){
let posNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (callback(numbers[i])) {
        posNumbers.push(numbers[i]);
    }
}
return posNumbers;
}

function myFilterNames(names,callback){
    let fixNames = [];
    for (let i = 0; i < names.length; i++) {
        if (callback(names[i])) {
            fixNames.push(names[i]);
        }
    }
    return fixNames;
    }

function callback(){
     return numbers => numbers < 1;   
}

function callbackNames(){
    return names => names.length < 5;   
}

function myMapNumbers(numbers,callback){
    let mapNames = [];
    for (let i = 0; i < numbers.length; i++){
        mapNames.push(callback(numbers[i]))
    }
    return mapNames;
}

console.log(numbers)
console.log(myFilterNumbers(numbers,callback()))
console.log(myFilterNumbers(numbers, n => n < 1))

console.log(names)
console.log(myFilterNames(names,callbackNames()))
console.log(myFilterNames(names, n => n.length < 5))

console.log(numbers)
console.log(myMapNumbers(numbers, n => n * 2))

Array.prototype.myFilterNamesPrototype = function(callback){
    let fixNamesProp = [];  
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            fixNamesProp.push(this[i]);
        }
    }
    return fixNamesProp;
    }

    console.log(names.myFilterNamesPrototype(n => n.length < 5))