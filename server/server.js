var express = require('express');
var app = express();

//requires
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
//mongoose
//server listen
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('listening on port: ', port);
}); // end app.listen