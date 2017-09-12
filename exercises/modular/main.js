var dir = process.argv[2];
var ext = process.argv[3];

var impModule = require('./module.js');
function callback(error, data){
  if(error) return error;
  
  for(var i = 0; i < data.length; i++){
    console.log(data[i]);
  }
}
impModule(dir, ext, callback);
