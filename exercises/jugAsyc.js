var url0 = process.argv[2];
var url1 = process.argv[3];
var url2 = process.argv[4];
var http = require('http');
var str='';

//FIRST URL
http.get(url0, function done(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
  str+= data;
  });
  response.on('end', function(data){
    console.log(str);
    str='';
    //SECOND URL
    http.get(url1, function done(response){
      response.setEncoding('utf8');
      response.on('data', function(data){
      str+= data;
      });
      response.on('end', function(data){
        console.log(str);
        str='';
        //THIRD URL
        http.get(url2, function done(response){
          response.setEncoding('utf8');
          response.on('data', function(data){
          str+= data;
          });
        response.on('end', function(data){
          console.log(str);
          });
        });
      });
    });
  });
});

/* EXAMPLE CODE

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
    */