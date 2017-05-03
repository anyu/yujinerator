var mongoose = require('mongoose');

var database = 'mongodb://heroku_4d6s6cbg:d9154prsu0kndq07hn8nhkhmkl@ds129641.mlab.com:29641/heroku_4d6s6cbg' || 'mongodb://localhost/yujinerator';
mongoose.connect(database);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});

module.exports = db;
