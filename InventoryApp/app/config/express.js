var express = require('express');
var bodyParser = require('body-parser');
var morgan = require("morgan");
var fs = require("fs");
var path = require('path')


module.exports = function () {
    console.log("Express called");
    var app = express();
    app.use(express.static('public'))
        //set the body-parser to handle the json requests
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    // parse application/json
    app.use(bodyParser.json());
    var accessLogStream = fs.createWriteStream(path.join(__dirname, '../../../access.log'), {
        flags: 'a'
    });
    //console.log(__dirname+'../../access.log');

    app.use(morgan('combined', {
        stream: accessLogStream
    }))

    app.set("views", "./app/views");
    app.set("view engine", "ejs");


    require("../routes/home.route")(app);
    require("../routes/about.route")(app);
    require("../routes/register.route")(app);

    return app;
};
