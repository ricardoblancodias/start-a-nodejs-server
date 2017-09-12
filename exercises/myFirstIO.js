var fs = require('fs');
fs = fs.readFileSync('test1.txt').toString();
var arr = fs.split('\n');
console.log(arr.length);