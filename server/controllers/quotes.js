var db = require('../config');
var Quote = require('../models/quote');


exports.submitQuote = function (req, res) {
  var mood = res.body.mood;
  var msg = res.body.message;

  var newQuote = new Quote({
    mood: mood,
    message: msg
  })

  newQuote.save(function(err) {
    if(err) { console.log("Error saving quote") }
  })

  console.log('Quote submitted');

};
