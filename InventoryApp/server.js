var configuration = require("./app/config/config");
var mongodb = require("./app/config/mongodb")();
var app = require("./app/config/express")();

app.listen(configuration.port);

console.log("server is runnning on port:" + configuration.port);
