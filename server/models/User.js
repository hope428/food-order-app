const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  profilePic: {
    type: String,
  }

  // orders: [Order.Schema],
});

const User = mongoose.model('User', userSchema)

module.exports = User