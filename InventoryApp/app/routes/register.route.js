var passport = require('passport');
var authenticate = require("../utils/authenticate");
module.exports = function(app) {
  /*var isAuthenticated = function(req, res, next) {
    if (!req.isAuthenticated()) {
      res.redirect("/login");
    }
    next();
  };*/
  var ctrl = require("../controllers/registerCtrl");
  app.get("/register", ctrl.get);
  app.post("/register", ctrl.post);
  app.get("/login", ctrl.getlogin);
  app.post("/login", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
  /*app.get('/oauth/facebook', passport.authenticate('facebook', {
    failureRedirect: '/login',
    scope: ['email']
  }));*/



}
