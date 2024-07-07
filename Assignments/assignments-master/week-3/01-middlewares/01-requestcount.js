const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

<<<<<<< HEAD
app.use((req,res,next)=>{
  requestCount++;
  next();
})

=======
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

<<<<<<< HEAD
//app.listen(3000);

=======
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
module.exports = app;