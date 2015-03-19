var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var busboy = require('connect-busboy');

var session = require('express-session');
var flash = require('connect-flash');
var path = require('path');

var passport = require('passport');

var user = require('./models/user.js');
require('./config/passport.js')(passport);

var app = express();
var router = express.Router();

//routes config
var apiRoutes = require(__dirname + '/routes/api/api-routes.js');
var portfolioRoutes = require(__dirname + '/routes/portfolio/portfolio-routes.js');
var memberRoutes = require(__dirname + '/routes/members/member-routes.js');

//database config
var mongoose = require('mongoose');
mongoose.connect('mongodb://cristidrincu:crusader2@ds047930.mongolab.com:47930/globestudios');

app.use(cors());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname , 'public')));
app.use(express.static(path.join(__dirname , 'bower_components')));
app.use(express.static(path.join(__dirname , 'app')));
app.use(express.static(path.join(__dirname , 'backend-app')));

app.use(passport.initialize());
app.use(passport.session());

app.use(apiRoutes);
app.use(portfolioRoutes);
app.use(memberRoutes);

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//passport login middleware
var auth = function(req, res, next){
	if (!req.isAuthenticated())
		res.send(401);
	else next();
};

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.get('/backend', function(req, res){
	res.render('login/login.ejs');
});

app.post('/backend', passport.authenticate('local-login', {
	successRedirect: '/profile/',
	failureRedirect: '/backend'
}));

app.get('/profile', function(req, res){
	res.render('members/backend-panel.ejs')
});

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

app.listen(app.get('port'), function(){
	console.log('App listening on port ' + app.get('port'));
});
