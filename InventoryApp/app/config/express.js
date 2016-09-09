var express = require('express');

module.exports = function () {
    var app = express();
    app.get("/", function (req, res) {
        res.send("<h1>How r u</h1>")
    });

    return app;
};
