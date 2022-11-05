const mongoose = require('mongoose');

// schema - sort of mongoose 'type' to store data
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);