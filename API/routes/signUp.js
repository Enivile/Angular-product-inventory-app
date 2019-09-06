// var express = require('express');
// const router = express.Router();
var controllers = require('../controllers/signUp.controller.js');

module.exports = function(app){

	app.post('/register', controllers.createUser);


}