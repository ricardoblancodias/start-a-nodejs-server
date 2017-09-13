var url = require('url');
var http = require('http');
var port = process.argv[2];

var server = http.createServer(function callback(request, response){
  if(request.method === 'GET'){
    var isoDate = url.parse(request.url,true);
    var date = new Date(isoDate.query.iso);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if(isoDate.pathname === '/api/parsetime'){
      var hours = date.getHours(); hours.toString().length === 1 ? hours='0'+hours : hours = hours;
      var minutes = date.getMinutes(); minutes.toString().length === 1 ? minutes='0'+minutes : minutes = minutes;
      var seconds = date.getSeconds(); seconds.toString().length === 1 ? seconds='0'+seconds : seconds = seconds;
      var jsonResponse = {'hour': hours, 'minute': minutes, 'second': seconds };
      response.end(JSON.stringify(jsonResponse));
    }else if(isoDate.pathname === '/api/unixtime'){
      var unixtime = date.getTime();
      var jsonResponse = {'unixtime': unixtime};
      response.end(JSON.stringify(jsonResponse));
    }  
  }
  
});
server.listen(port);

/* OFFICIAL SOLUTION

 var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
    
    */