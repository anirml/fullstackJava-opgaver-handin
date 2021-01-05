function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        console.log(name)
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();



function person() {
    var age
    var name
    function getInfo(){
        return name + ' ' + age
    }

    function setName(newName){
        name = newName
    }
    function setAge(newAge){
        age = newAge
    }
    return{
        getInfo,
        setAge,
        setName
    }
}

let p = person();
p.setName('Mads')
p.setAge('18')
console.log(p.getInfo())

//ES6 version

class Person {
    constructor(name,age){
        this._name = name
        this._age = age
    }
    getInfo(){
        return this._name + " " + this._age
    }
    get name(){return this._name}

    set name(newName){ this._name = newName}

    get age(){return this._age}

    set age(newAge){ this._age = newAge}

}

let p2 = new Person('Jens', 21)
console.log(p2.getInfo())