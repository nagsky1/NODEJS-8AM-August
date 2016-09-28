var passport = require('passport');
var authenticate = require("../utils/authenticate");
var fileUploadCtrl = require("../controllers/fileUploadCtrl");


module.exports = function(app) {
  app.post("/api/fileUpload", authenticate, fileUploadCtrl.uploadFile)
}
