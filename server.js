var express = require('express');
var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');

var config = require('./config');


var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.get('/', function (req, res) {
   	res.sendFile( __dirname + "/public/views/" + "index.html" );
})



var server = app.listen(config.port, function (err) {
   
	if(err) {
		console.log(err);
	} else {

   		var host = server.address().address
   		var port = server.address().port
   
   		console.log("Example app listening at http://%s:%s", host, port)
	}
})