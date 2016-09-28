var fileUploadCtrl = {};
var multer = require('multer');
var filecreated = "";
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads');
  },
  filename: function(req, file, callback) {
    console.log(file);
    filecreated = file.fieldname + '-' + Date.now() + ".jpg"
    callback(null, file.fieldname + '-' + Date.now() + ".jpg");
  }
});

var upload = multer({
  storage: storage
}).single('userPhoto');


fileUploadCtrl.uploadFile = function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      console.log(err);
      return res.end("Error uploading file.");
    }
    console.log("file upladed successfully");
    res.end("filed uploaded" + filecreated);
  });
};
module.exports = fileUploadCtrl;
