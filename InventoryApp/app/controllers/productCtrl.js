var productCtrl = {};
var config =require("../config/config");
var request = require('request');

productCtrl.get = function(req, res) {
    
    
  /*var buildUrl =config.wallMartUrl;
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
    res.render("products",{products:body.items});
}
});*/
     res.render("products",{products:{items:[]}});
};

productCtrl.post=function(req,res){
    
 //var searchParam=req.body.data;
var searchParam = req.body.productName;
    console.log(searchParam);
  var buildUrl =config.wallMartUrl;
  var search ="search?query="+searchParam+"&";
  var apiKey =config.wallMartApiKey;
  console.log(config.wallMartUrl);
  console.log(buildUrl+search+apiKey);

  request(buildUrl+search+apiKey, function (error, response, body) {
    if(error){
      console.log(error);
      res.send("error");
    }
  if (!error && response.statusCode == 200) {
   // console.log(body);
   // res.json(JSON.parse(body));
      var items= JSON.parse(body);
      console.log(items);
      res.render("products",{products:items})
}
});

};



module.exports=productCtrl;
