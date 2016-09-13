module.exports = function (app) {
    var ctrl = require("../controllers/registerCtrl");
    app.get("/register", ctrl.get);
    app.post("/register", ctrl.post)

}
