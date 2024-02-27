const fs = require("fs");

function readFile(){
  return new Promise((resolve)=>{
    fs.readFile("text.txt","utf-8",(err,data)=>{
      resolve(data);
    })
  })
}

readFile().then((data)=>{
  newString = "";
  count = 0;
  for(let i=0; i<data.length; i++){
    if(data[i]==" " && newString[newString.length-1]==" "){
      continue;
    }
    newString += data[i];
  }
  newString = newString.trim();
  fs.writeFile("text.txt",newString,(err,data)=>{})
})