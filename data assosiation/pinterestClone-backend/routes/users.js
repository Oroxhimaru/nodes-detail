const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pinterestUserData")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  dp: {
    type: String, // You might want to store the URL or file path of the profile picture
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('User', userSchema);
