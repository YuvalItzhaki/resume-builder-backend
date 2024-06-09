const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    googleId: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);

module.exports = User;
