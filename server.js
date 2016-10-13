var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');
var mongoose = require('mongoose');
require('./db');
var app = express();

// var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/',express.static('./client'));
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), function(){
  console.log('App is listening on port', app.get('port'));
});