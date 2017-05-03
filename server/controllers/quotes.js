var db = require('../config');
var Quote = require('../models/quote');


exports.submitQuote = ((req, res) => {
    console.log('msg', req.body.message);
    console.log('mood', req.body.mood);

  var newQuote = new Quote({
    mood: req.body.mood,
    message: req.body.message
  })

  newQuote.save((err) => {
    if (err) {
      console.log("Error saving quote", err)
    } else {
      console.log('Quote submitted');
    }
  })
});

exports.getQuote = function (req, res) {
  console.log("req", req.query.mood);
  Quote.count({'mood': req.query.mood}).exec(function (err, count) {
    var random = Math.floor(Math.random() * count)
    Quote.findOne({'mood': req.query.mood}).skip(random).exec(function (err, quote) {
      res.status(200).send(quote);
    })
  })
};
