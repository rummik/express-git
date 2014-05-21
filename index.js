var express = require('express');
var nodegit = require('nodegit');
var swig = require('swig');

var app = express();

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.set('views', __dirname + '/views');

if (process.env.NODE_ENV == 'development') {
	app.set('view cache', false);
	swig.setDefaults({ cache: false });
}

app.get('/', function(req, res) {
	res.render('index');
});

app.use(express.static(__dirname + '/public'));

module.exports = app;
