var fs = require('fs');

function mainFun(callback){
  fs.readFile('test1.txt', function done(error, content){
    var arr = content.toString().split('\n');
    logSum(arr.length);
  });
}

function logSum(length){
  console.log(length);
}

mainFun(logSum);