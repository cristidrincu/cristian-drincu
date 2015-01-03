var express = require('express');
var router = express.Router();
var Member = require('../../models/member.js');
var app = module.exports = express();

app.route('/backend/add-new-member')
	.get(function(req, res){
		res.render('members/members-backend.ejs')
	})
	.post(function(req, res){
		var member = new Member();

		member.name = req.body.memberName;
		member.role = req.body.memberRole.split(',');
		member.timeSpent = req.body.timeSpent;
		member.linkedin = req.body.linkedinProfileLink;
		member.description = req.body.memberDescription;
		member.avatarImage = '';

		member.save(function(err){
			if(err)
				throw err;

			res.redirect('/backend/add-new-member')
		});
	})


