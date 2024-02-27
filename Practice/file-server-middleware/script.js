const express = require("express");
const fs = require("fs");
const { resolve } = require("path");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use(express.json());

let count = 0;

function countRequest(req, res, next) {
  count++;
  console.log("Request counter : " + count);
  next();
}

let t1 = performance.now();
let avgTime = 0;

function averageTime(req, res, next) {
  let time = performance.now() - t1;
  avgTime = (avgTime + time) / 2;
  t1 = performance.now();
  console.log("Average Time : " + avgTime);
  next();
}

function authentication(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "rajvardhan605" || password != 123) {
    res.status(403).json({ msg: "Incorect username or password" });
  } else {
    next();
  }
}

//getting file content

app.get("/", countRequest, authentication, averageTime, (req, res) => {
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

app.post("/", countRequest, authentication, (req, res) => {
  function writeFile() {
    let content = req.body.content;
    return new Promise((resolve) => {
      fs.writeFile("files/a.txt", content, (err) => {});
      resolve();
    });
  }
  writeFile().then(() => {
    res.json({
      msg: "new content is added to the file",
    });
  });
});

//updating the content of the file

app.put("/", countRequest, authentication, (req, res) => {
  function updateFile() {
    let content = req.body.content;
    return new Promise((resolve) => {
      fs.appendFile("files/a.txt", content, () => {});
      resolve();
    });
  }
  updateFile().then(() => {
    res.json({
      msg: "content of the file updated",
    });
  });
});

//deleting all content of the file

app.delete("/", countRequest, authentication, (req, res) => {
  function deleteFile() {
    return new Promise((resolve) => {
      fs.writeFile("files/a.txt", "", () => {});
      resolve();
    });
  }
  deleteFile().then(() => {
    res.json({
      msg: "deleted all the content of the file",
    });
  });
});

app.listen(port);
