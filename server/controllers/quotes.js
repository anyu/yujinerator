var db = require('../config');
var Quote = require('../models/quote');


exports.submitQuote = function (req, res) {
  console.log(req.body.message);
  var mood = req.body.mood;
  var msg = req.body.message;

  var newQuote = new Quote({
    mood: mood,
    message: msg
  })

  newQuote.save(function(err) {
    if(err) { console.log("Error saving quote") }
  })
  console.log('Quote submitted');
};

exports.getQuote = function (req, res) {
  var mood = req.body.mood;
  var msg = req.body.message;

  Quote.findOne({ mood: mood }, function (err, quote) {
    console.log(quote);
  })
};
