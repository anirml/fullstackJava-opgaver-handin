var fs = require('fs') 
var filetoread = process.argv[2]  

fs.readFile(filetoread, function (err, callback){
var linjer = callback.toString().split('\n').length -1
console.log(linjer)  
})