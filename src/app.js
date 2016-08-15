'use strict';

var express = require('express');
var bodyParser = require('body-parser')
var router = require('./api/api-index');
var app = express();

require('./database');
require('./database-seed');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', express.static('public'));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(3000, function() {
	console.log("The server is running on port 3000!");
});