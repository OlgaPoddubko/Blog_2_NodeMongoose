var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  comments: [{ body: String, date: Date }]
});

module.exports = mongoose.model('Blog', BlogSchema);