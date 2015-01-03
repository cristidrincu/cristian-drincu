var mongoose = require('mongoose');

var memberSchema = mongoose.Schema({
	name: String,
	role: Array,
	timeSpent: String,
	linkedin: String,
	avatarImage: String,
	description: String,
	projects: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Portfolio"
	}]
});

module.exports = mongoose.model('Member', memberSchema);
