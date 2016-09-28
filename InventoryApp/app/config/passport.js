var passport = require('passport'),
	mongoose = require('mongoose');

module.exports = function() {
	var User = mongoose.model('UserDetails');

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findOne({
				_id: id
			},
			'-password',
			function(err, user) {
				done(err, user);
			}
		);
	});

	require('./stratagies/local.js')();
	//require('./stratagies/facebook.js')();
	/*require('./strategies/twitter.js')();*/
};
