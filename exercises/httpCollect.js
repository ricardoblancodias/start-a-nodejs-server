var bl = require('bl');
var http = require('http');
var url = process.argv[2];
var str = '';
http.get(url, function done(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
  str+= data;
  });
  response.on('end', function(data){
    console.log(str.length);
    console.log(str);
  });
});