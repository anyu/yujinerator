const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config');
const quotes = require('./controllers/quotes')

const PORT = process.env.PORT || 8080;
const IP = '127.0.0.1';
const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.resolve('client')));

app.listen(PORT, function() {
  console.log('Listening on: ', PORT)
})

app.get('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'));
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})
app.get('/submitquote', quotes.getQuote);
app.post('/submitquote', quotes.submitQuote);
