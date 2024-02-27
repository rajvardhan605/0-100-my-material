const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
//middleware
app.use(express.json())
app.use(bodyParser.json());
app.post('/',(req,res)=>{
  //console.log(req.body.message)
  //res.send("Raj Veardhan Singh Backend Server");
  res.json({
    output: "2+2=4"
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})