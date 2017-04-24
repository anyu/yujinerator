var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  mood: { type: String, required: true },
  message: { type: String, required: true }
});


var Quote = mongoose.model('Quote', QuoteSchema);



module.exports = Quote;
