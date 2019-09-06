var mongoose = require('mongoose');

var signUpSchema = mongoose.Schema({
	email: String,
	userName: String,
	password: String,
	phoneNo: Number
},{
	timestamps: true
});


module.exports = mongoose.model('users', signUpSchema);