const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const IP = '127.0.0.1';
const app = express();

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/client'));

app.listen(PORT, function() {
  console.log('Listening on: ', PORT)
})

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})
