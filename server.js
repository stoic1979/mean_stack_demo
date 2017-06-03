var bodyParser = require('body-parser');
var express = require('express');
var config = require('./config');


var app = express();

var server = app.listen(config.port, function (err) {
   
	if(err) {
		console.log(err);
	} else {

   		var host = server.address().address
   		var port = server.address().port
   
   		console.log("Example app listening at http://%s:%s", host, port)
	}
})