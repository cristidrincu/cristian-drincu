var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var busboy = require('connect-busboy');

var session = require('express-session');
var flash = require('connect-flash');
var path = require('path');
var app = express();
var router = express.Router();

//routes config
var apiRoutes = require(__dirname + '/routes/api/api-routes.js');
var loginRoutes = require(__dirname + '/routes/login/login-routes.js');
var portfolioRoutes = require(__dirname + '/routes/portfolio/portfolio-routes.js');
var memberRoutes = require(__dirname + '/routes/members/member-routes.js');

//database config
var mongoose = require('mongoose');
mongoose.connect('mongodb://cristidrincu:crusader2@ds047930.mongolab.com:47930/globestudios');

app.use(cors());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname , 'public')));
app.use(express.static(path.join(__dirname , 'app')));

app.use(apiRoutes);
app.use(loginRoutes);
app.use(portfolioRoutes);
app.use(memberRoutes);

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.get('/backend', function(req, res){
	res.sendFile(_dirname + '/views/login/login.ejs')
});


app.listen(app.get('port'), function(){
	console.log('App listening on port ' + app.get('port'));
});
