const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");


const app = express();

app.use(express.json());

app.use(bodyParser.json());

let key = 1;


app.get("/todos", (req, res) => {
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      let todo = JSON.parse(data);
      let iD = req.params.id;
      for (let i = 0; i < todo.length; i++) {
        if (todo[i].id == iD) {
          return res.status(200).json(todo[i]);
        }
      }
      res.status(404).send();
    }
  });
});

app.post("/todos", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let completed = req.body.completed;
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      let todo = JSON.parse(data);
      let item = {
        id: key,
        title: title,
        completed: completed,
        description: description,
      };
      todo.push(item);
      let todos = JSON.stringify(todo);
      fs.writeFileSync("./todos.json", todos);
      key++;
      res.status(201).json(item);
    }
  });
});

app.put("/todos/:id", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let completed = req.body.completed;
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      let todo = JSON.parse(data);
      let iD = req.params.id;
      for (let i = 0; i < todo.length; i++) {
        if (todo[i].id == iD) {
          let temp = {
            id: iD,
            title: title,
            description: description,
          };
          todo[i] = temp;
          let item = JSON.stringify(todo);
          fs.writeFileSync("./todos.json", item);
          return res.status(200).send(temp);
        }
      }
      res.status(404).send();
    }
  });
});

app.delete("/todos/:id",(req,res)=>{
  let iD = req.params.id;
  fs.readFile("./todos.json","utf-8",(error,data)=>{
    if(error){
      throw err;
    }
    else{
      let todo = JSON.parse(data);
      for(let i=0; i<todo.length; i++){
        if(todo[i].id ==iD){
          todo.splice(i,1);
          let item = JSON.stringify(todo);
          fs.writeFileSync("./todos.json",item);
          return res.status(200).send();
        }
      }
      res.status(404).send();
    }
  })
})

app.use((req, res, next) => {
  res.status(404).send();
});

module.exports = app;