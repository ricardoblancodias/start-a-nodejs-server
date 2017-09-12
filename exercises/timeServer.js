var port = process.argv[2];
var net = require('net');
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1; month.toString().length === 1 ? month='0'+month : month=month;
var day = date.getDate(); day.toString().length === 1 ? day='0'+day : day=day;
var hours = date.getHours(); hours.toString().length === 1 ? hours='0'+hours : hours=hours;
var minutes = date.getMinutes(); minutes.toString().length === 1 ? minutes='0'+minutes : minutes=minutes;

var server = net.createServer(function listener(socket){
  socket.write(year+'-'+month+'-'+day+' '+hours+':'+minutes);
  socket.end('\n');
});
server.listen(port);

/*OFFICIAL SOLUTION

var net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
    
    */