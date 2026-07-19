const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postName: {
    type: String,
    trim: true,
    required: true,
  },

  postDescription: {
    type: String,
    trim: true,
    required: true
  },

  postDate: {
    type: Date,
    default: Date.now
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

const Post = mongoose.model("Post", postSchema);
module.exports = Post;