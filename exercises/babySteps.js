var sum = 0;
if(process.argv[2]!==null){
  for(var i = 2; i < process.argv.length; i++){
    if(parseInt(process.argv[i])==process.argv[i]){
      sum+= parseInt(process.argv[i]);
    }
  }
}
console.log(sum);

/* OFFICIAL SOLUTION
var result = 0
    
    for (var i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }
    
    console.log(result)
*/
