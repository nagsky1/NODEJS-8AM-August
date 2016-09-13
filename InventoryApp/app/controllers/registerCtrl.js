var registerCtrl = {};
var registerModel = require("../models/register.model");

registerCtrl.get = function (req, res) {
    //res.render("register");
    getAllUsers(req, res);
};
registerCtrl.post = function (req, res) {
    console.log(req.body);
    createUser(req.body);
    res.send("Form posted");
};

var getAllUsers = function (req, res) {
    registerModel.find({}, function (err, users) {
        if (err) {
            res.send("error occurred");
        } else {
            res.render("register", {
                users: users
            });
        }
        // docs.forEach 
    });
};
var createUser = function (user) {
    var user = new registerModel(user);
    user.save(function (err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
        }
    });
};

module.exports = registerCtrl;
