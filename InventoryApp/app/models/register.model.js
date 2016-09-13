var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserDetails = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    phoneNumber: Number,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

var model = mongoose.model('UserDetails', UserDetails);
module.exports = model;
