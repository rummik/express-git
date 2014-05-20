var express = require('express');
var nodegit = require('nodegit');

var app = express();

app.get('/', function(req, res) {
	res.send('');
});

module.exports = app;
