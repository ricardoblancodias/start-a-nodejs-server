var fs = require('fs');

function mainFun(path, extension, callback){
  fs.readdir('/app', function done(error,content){
    callback(extension, content);
    console.log(content);
  });
}

function search(extension, arr){
  var str = '';
  var fileArr = [];
  var a = false;
  
  for(var i = 0; i < arr.length; i++){
    str = '';
    a = false;
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i].charAt(j)==='.'){
        str = '';
        a = true;
      }
      if(a){
        str = str.concat(arr[i].charAt(j));
      }
    }
   if(str===extension){
     fileArr.push(arr[i]);
   } 
  }
  console.log(fileArr);
}

mainFun('/app','.js', search);