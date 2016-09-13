var express = require('express');
var bodyParser = require('body-parser');

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

    app.set("views", "./app/views");
    app.set("view engine", "ejs");


    require("../routes/home.route")(app);
    require("../routes/about.route")(app);
    require("../routes/register.route")(app);

    return app;
};
