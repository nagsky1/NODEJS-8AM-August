var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('UserDetails');

module.exports = function() {
	passport.use(new LocalStrategy(function(username, password, next) {
		console.log(username);
		console.log(password);
		User.findOne({
				userName: username
			},
			function(err, user) {

				//if error occurs handle the error.
				if (err) {
					return next(err);
				}
				//if no error and user is null
				if (!user) {
					return next(null, false, {
						message: 'Unknown user'
					});
				}
				//if user exists and password don't match
				if (!user.authenticate(password)) {
					return next(null, false, {
						message: 'Invalid password'
					});
				}

				return next(null, user);
			}
		);
	}));
};
