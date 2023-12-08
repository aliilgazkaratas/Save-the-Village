const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  village: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Village',
  },
  // Other user details
  // For example:
  // firstName: String,
  // lastName: String,
  // age: Number,
  // interests: [String],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

