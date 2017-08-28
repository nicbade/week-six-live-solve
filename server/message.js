var express = require('express');
var router = express.Router();

var Message = require('../models/message.schema.js')


router.get('/', function(req, res) {
    // find all of the people in the collection
    Message.find({}, function(err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            // console.log('found data: ', data);
            res.send(data);
        }
    });
});

module.exports = router;