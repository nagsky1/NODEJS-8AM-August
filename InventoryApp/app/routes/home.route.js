module.exports = function (app) {
    console.log("routes called");
    var isAuthenticated = function(req,res,next){
      console.log("Authenticating....");
      if(!req.isAuthenticated()){
        res.redirect("/login");
      }
      else{
        next();
      }
      //next();
    };
    var ctrl = require("../controllers/homeCtrl");
    app.get("/", isAuthenticated,ctrl.get);
    app.post("/",isAuthenticated, ctrl.post)
        /*app.get("/home", function (req, res) {
            res.send("<h1>Home</h1>")
        });
        app.get("/", function (req, res) {
            res.send("<h1>Home</h1>")
        });*/
}
