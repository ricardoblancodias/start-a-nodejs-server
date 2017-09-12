var url = process.argv[2];
var http = require('http');

function main(){
  http.get(url, function done(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      console.log(data);
    });
  });
}

main();

