const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  name: String,
  text: String,
  newsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'News'
  }
});

const comments = mongoose.model('comments', commentsSchema);

module.exports = comments;