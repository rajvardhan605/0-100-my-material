const express = require("express");
const fs = require("fs");
const { resolve } = require("path");
const app = express();

const port = 3000;

app.use(express.json());

//getting file content

app.get("/", (req, res) => {
  function readFile() {
    return new Promise((resolve) => {
      fs.readFile("files/a.txt", "utf-8", (err, data) => {
        resolve(data);
      });
    });
  }
  readFile().then((data) => {
    res.send(data);
  });
});

//putting new file content

app.post("/", (req, res) => {
  function writeFile(){
    let content = req.body.content;
    return new Promise((resolve)=>{
      fs.writeFile("files/a.txt",content,(err)=>{});
      resolve();
    })
  }
  writeFile().then(()=>{
    res.json({
      msg:"new content is added to the file"
    });
  })
});

//updating the content of the file

app.put("/",(req,res)=>{
  function updateFile(){
    let content = req.body.content;
    return new Promise((resolve)=>{
      fs.appendFile("files/a.txt",content,()=>{});
      resolve();
    })
  }
  updateFile().then(()=>{
    res.json({
      msg:"content of the file updated"
    })
  })
})

//deleting all content of the file

app.delete("/",(req,res)=>{
  function deleteFile(){
    return new Promise((resolve)=>{
      fs.writeFile("files/a.txt","",()=>{});
      resolve();
    })
  }
  deleteFile().then(()=>{
    res.json({
      msg:"deleted all the content of the file"
    })
  })
})

app.listen(port);
