var mongoose = require('mongoose');

var portfolioSchema = mongoose.Schema({
	name: String,
	type: String, //graphic or web
	published: String, //year when the project was developed,
	yearStartingProject: Boolean, //flag to indicate that this is the first project to be displayed for a given year
	description: String,
	projectComplexity: String,
	projectMembers: [{
		type: mongoose.Schema.Types.ObjectId, ref: "Member"
	}],
	technologiesUsed: Array,
	projectWebLink: String,
	projectMainImage: String,
	projectImages: Array
});

module.exports = mongoose.model('Project', portfolioSchema);
