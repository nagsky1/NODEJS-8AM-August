var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
app.get('/index', function(req, res) {
  res.send('<h1>I am the index page');
});
app.get('/about', function(req, res) {
  res.send('<h1>I am the about page');
});
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});
app.listen(9000);
console.log("application running on port 9000");