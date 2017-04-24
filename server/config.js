var mongoose = require('mongoose');

var database = process.env_MONGO_URL || 'mongodb://localhost/yujinerator';
mongoose.connect(database);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});

module.exports = db;
