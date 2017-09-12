var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function callback(request, response){
  var read = fs.createReadStream(path);
  read.pipe(response);
});
server.listen(port);