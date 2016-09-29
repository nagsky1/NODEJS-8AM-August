var productCtrl = {};
var config =require("../config/config");
var request = require('request');

productCtrl.get = function(req, res) {
  var buildUrl =config.wallMartUrl;
  var search ="search?query=samsung&";
  var apiKey =config.wallMartApiKey;
  console.log(config.wallMartUrl);
  console.log(buildUrl+search+apiKey);

  request(buildUrl+search+apiKey, function (error, response, body) {
    if(error){
      console.log(error);
      res.send("error");
    }
  if (!error && response.statusCode == 200) {
    console.log(body);
    res.render("products",{products:body});
}
});
};

productCtrl.post=function(req,res){
  var buildUrl =config.wallMartUrl;
  var search ="search?query=samsung&";
  var apiKey =config.wallMartApiKey;
  console.log(config.wallMartUrl);
  console.log(buildUrl+search+apiKey);

  request(buildUrl+search+apiKey, function (error, response, body) {
    if(error){
      console.log(error);
      res.send("error");
    }
  if (!error && response.statusCode == 200) {
    console.log(body);
    res.render("products",{products:body});
}
});

};



module.exports=productCtrl;
