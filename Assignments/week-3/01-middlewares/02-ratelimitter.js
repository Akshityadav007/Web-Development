const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
const intervalId = setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);


// before any request is processed, meet this function ⬇
app.use((req, res, next) => {
  const userId = req.headers['user-id'];

  if(numberOfRequestsForUser[userId]){
    if(numberOfRequestsForUser[userId] < 5){
      numberOfRequestsForUser[userId]++;
      next();                                   // move to the next fn (the request fn called)
    }
    else res.status(404).send();
  }
  else {
    numberOfRequestsForUser[userId] = 1;  // id : request count
    next();
  }      
});


app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});



// Use afterAll for any cleanup that needs to happen once for the entire suite, such as stopping a server, closing database connections, or clearing timers.
// this was added by me ⬇ with the help of chatgpt.
afterAll(() => {
  clearInterval(intervalId);
});     // this clears the interval limiting the reset of the function which was being called after every 1 second.

module.exports = app;