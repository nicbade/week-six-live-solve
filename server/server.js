var express = require('express');
var app = express();

//requires
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
//mongoose
var databaseUrl = 'mongodb://localhost:27017/livechallenge';
mongoose.connect(databaseUrl, {
    useMongoClient: true
});

mongoose.connection.on('connected', function() {
    console.log('mongoose connected to : ', databaseUrl);
});

mongoose.connection.on('error', function(err) {
    console.log('mongoose connection error to : ', err);
});
//server listen
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('listening on port: ', port);
}); // end app.listen