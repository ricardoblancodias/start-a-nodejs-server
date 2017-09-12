var fs = require('fs');
var path = require('path');
var fileList = [];

module.exports = function(dir, ext, callback){
  fs.readdir(dir, function done(error, data){
    if(error) return callback(error);
    
    for(var i = 0; i < data.length; i++){
      if('.'+ext === path.extname((data[i]))){
        fileList.push(data[i]);
      }
    }
    
    callback(null, fileList);
  });
};