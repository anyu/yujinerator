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
    if (err) {
      console.log("Error saving quote")
    } else {
      console.log('Quote submitted');
    }
  })
};

exports.getQuote = function (req, res) {
  Quote.findOne({'mood': 'Classic Jin' }, function (err, quote) {
    res.status(200).send(quote);
  })
};
