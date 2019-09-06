let controller = {};
let signup = require('../models/signUpForm.model.js');
	
controller.createUser= (req,res) => {
	var rqst = req.body;
	if(rqst.email == null || rqst.userName == null || rqst.password == null || rqst.phoneNo == null)
	{
		return res.status(400).send({
			message : "Feild can't be empty"
		});
	}
	var temp = new signup({
		email: rqst.email,
		userName: rqst.userName,
		password: rqst.password,
		phoneNo: rqst.phoneNo
	});
	temp.save()
	.then(data => {
		res.send("Data send");
	})
	.catch(err => {
		res.status(500).send({
			message: err.message || "Some error occured while creating user. Plz try again!!!"
		});
	});
}

module.exports = controller;