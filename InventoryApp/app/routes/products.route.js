    var authenticate = require("../utils/authenticate");

module.exports = function(app) {

  var ctrl = require("../controllers/productCtrl");
  app.get("/products", ctrl.get);
  app.post("/products", ctrl.post);
};
