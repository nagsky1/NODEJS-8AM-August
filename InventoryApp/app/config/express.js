var express = require('express');


module.exports = function () {
    console.log("Express called");
    var app = express();
    app.set("views", "./app/views");
    app.set("view engine", "ejs");


    require("../routes/home.route")(app);
    require("../routes/about.route")(app);

    return app;
};
