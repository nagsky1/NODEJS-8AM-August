var authenticate = require("../utils/authenticate");

module.exports = function(app) {

  var ctrl = require("../controllers/homeCtrl");
  app.get("/", authenticate, ctrl.get);
  app.post("/", authenticate, ctrl.post)
    /*app.get("/home", function (req, res) {
        res.send("<h1>Home</h1>")
    });
    app.get("/", function (req, res) {
        res.send("<h1>Home</h1>")
    });*/
}
