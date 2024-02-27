const fs = require('fs');
function readFile(){
  return new Promise((resolve,reject)=>{
    fs.appendFile("text.txt"," appended some content to the file in write",function(err,data){
      if(err){
        reject(err);
      }
    })
    fs.readFile("text.txt","utf-8",function(err,data){
      resolve(data);
    })
  })
}

readFile().then((data)=>{
  console.log(data);
}).catch((data)=>{
  console.log(data);
})

for(i=0; i<=100000000; i++){
  i+i;
}