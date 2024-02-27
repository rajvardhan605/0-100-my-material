const express = require("express");

const app = express();

app.get("/",function(req,res){
  let a = req.query.a;
  let b = req.query.b;
  let sum = parseInt(a)+parseInt(b);
  res.send(sum.toString());
})

app.listen(3000);