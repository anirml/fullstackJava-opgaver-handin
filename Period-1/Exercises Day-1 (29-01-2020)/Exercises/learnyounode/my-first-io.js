var fs = require('fs')
 
var filetoread = fs.readFileSync(process.argv[2])  
var linjer = filetoread.toString().split('\n').length -1

console.log(linjer)