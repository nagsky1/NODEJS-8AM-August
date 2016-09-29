var configuration = {
  port: 4000,
  dbConnection: 'mongodb://learnmongo:training#2016@ds021036.mlab.com:21036/flipdb',
  facebook: {
    clientID: '1503160493043567',
    clientSecret: '6e39e66c219715c90c64e76c0e4daeea',
    callbackURL: 'http://localhost:4000/login/facebook/return'
  },
  wallMartUrl: "http://api.walmartlabs.com/v1/",
  wallMartApiKey: "apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json"
};

module.exports = configuration;
