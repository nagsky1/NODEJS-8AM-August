var homeController = {};

homeController.get = function(req, res) {
  console.log(req.isAuthenticated());

  res.render("fileUpload");
};


homeController.post = function(req, res) {
  res.send("Form posted");
};
homeController.put = function(req, res) {

};
homeController.delete = function(req, res) {

};
module.exports = homeController;
