var configuration = require("./app/config/config");
var mongodb = require("./app/config/mongodb");
var express = require("./app/config/express");
var passport = require('./app/config/passport');


var mongodb = mongodb(),
  app = express(),
  passport = passport();

app.listen(configuration.port);

module.exports = app;

console.log("server is runnning on port:" + configuration.port);
