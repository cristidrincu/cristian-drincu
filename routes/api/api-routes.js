var express = require('express');
var app = module.exports = express();
var Project = require('../../models/portfolio.js');
var router = express.Router();

app.route('/api/portfolio/')
	.get(function(req, res){
		Project.find({}).populate('projectMembers').exec(function(err, projects){
			if(err)
				res.send(err);

			res.json(projects);
		});
});

app.route('/api/portfolio/:id')
	.get(function(req, res){
		Project.findById(req.params.id).populate('projectMembers').exec(function(err, project){
			if(err)
				res.send(err);

			res.json(project);
		});
});