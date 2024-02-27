const fs = require('fs');
function readFile(){
  return new Promise((resolve)=>{
    fs.readFile("text.txt","utf-8",function(err,data){
      resolve(data);
    })
  })
}

readFile().then((data)=>{
  console.log(data);
})

for(i=0; i<=1000000000; i++){
  i+i;
}