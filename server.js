var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');
var app = express();
var port = 3000;

// app.get('/', function(req, res){
// 	res.send('Im alive!!!');
// });


app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/client'));

app.listen(port, function(){
  console.log('App is listening on port', port);
});