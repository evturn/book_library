var application_root = __dirname,
	express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	mongoose = require('mongoose');

var app = express();

app.use(express,static(path.join(application_root, 'site'))):