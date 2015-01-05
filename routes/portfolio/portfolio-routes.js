var express = require('express');
var router = express.Router();
var Portfolio = require('../../models/portfolio.js');
var app = module.exports = express();

app.route('/backend/create-new-project')
	.get(function(req, res){
		res.render('portfolio/portfolio-backend.ejs')
	})
	.post(function(req, res){
		var project = new Portfolio();
		project.name = req.body.projectName;
		project.type = req.body.projectType;
		project.published = req.body.projectYear;
		project.description = req.body.projectDescription;
		project.projectComplexity = req.body.projectComplexity;
		project.technologiesUsed = req.body.projectTechnologies.split(',');
		project.projectWebLink = req.body.projectWebLink;
		project.yearStartingProject = false;
		project.projectMainImage = '';
		project.projectTeaserImage = '';

		project.save(function(err){
			if(err){
				res.send(err)
			}
			res.redirect('/backend/create-new-project');
		});
	});
