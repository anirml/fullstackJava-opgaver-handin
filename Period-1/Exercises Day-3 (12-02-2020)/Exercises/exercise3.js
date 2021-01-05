const fetch = require("node-fetch");
var now = require("performance-now")
const URL = "https://swapi.co/api/people/";

async function fetchPerson(url) {
    //Complete this function
    return await fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
}

async function printNames() {
    console.log("Before");
    const person1 = await fetchPerson(URL + '1');
    const person2 = await fetchPerson(URL + '2');
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all");
}

//printNames()

async function printNamesParallel(){
    console.log("Before");
    const person1 = fetchPerson(URL + '1');
    const person2 = fetchPerson(URL + '2');
    const people = await Promise.all([person1, person2]);

    console.log(people.map(p => p.name).join(', '))

    console.log("After all");    
}

//printNamesParallel()

async function calcTime(func) {
var start = now()
await func()
var end = now()
res = (end - start).toFixed(3)
console.log("Call to do something took " + res + " milliseconds.");
return res
}

calcTime(printNames)    
calcTime(printNamesParallel)