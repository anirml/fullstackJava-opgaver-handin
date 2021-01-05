numbers = [2, 3, 67, 33];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log("nums sum: "+ numbers.reduce(reducer))

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

var ageReducer = function(accumulator, member, index, arr ){
    avg = accumulator + member.age / arr.length
    return avg;
}

console.log("avg age: " + members.reduce(ageReducer, 0))

var votes = ["Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

var voteCount = votes.reduce((accumulator,currentValue) => {
    if (!accumulator[currentValue]) accumulator[currentValue] = 1;
    else accumulator[currentValue] += 1;
    return accumulator;
},{})

console.log(voteCount)

var a = {}
if (a["clinton"])
 console.log("I Will Not Print")
a["clinton"] = 1;
console.log("You will see me")
console.log("Value of clinton "+ a["clinton"]);