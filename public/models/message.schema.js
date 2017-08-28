var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    city: { type: String },
    cost: { type: Number },
    sqft: { type: Number }
}, {
    collection: 'livechallenge'
});

module.exports = mongoose.model('Message', listingSchema);