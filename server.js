var express = require('express');
var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');


//-----------------------------------------------------
//  SETUP APP
//-----------------------------------------------------
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public/"));


//-----------------------------------------------------
//   CONNECT TO MONGODB
//-----------------------------------------------------
mongoose.connect(config.database, function(err) {

	if(err) {
		console.log("[ERROR] failed to connect to database.");
		console.log(err);
	} else {
		console.log("[INFO] Successfully connected to database. ");
	}


});


//-----------------------------------------------------
//   SETUP APIS
//-----------------------------------------------------
var api = require('./app/routes/api')(app, express);
app.use('/api', api);


//-----------------------------------------------------
//   APP ROUTES
//-----------------------------------------------------

app.get('/', function (req, res) {
   	res.sendFile( __dirname + "/public/views/" + "index.html" );
})


//-----------------------------------------------------
//                    START SERVER 
//-----------------------------------------------------
var server = app.listen(config.port, function (err) {
   
	if(err) {
		console.log(err);
	} else {

   		var host = server.address().address
   		var port = server.address().port
   
   		console.log("Example app listening at http://%s:%s", host, port)
	}
})