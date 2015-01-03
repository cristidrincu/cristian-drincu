var express = require('express');
var router = express.Router();
var app = module.exports = express();

app.route('/backend')
	.get(function(req, res){
		res.render('login/login.ejs')
	})
