var isUserLoggedIn = function(req, res, next) {

  if (!req.isAuthenticated()) {
    res.redirect("/login");
  }
  console.log("authenticated");
  next();
};

module.exports = isUserLoggedIn;
