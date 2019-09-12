const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  avatar: String,
  name: String,
  company: String,
  email: String,
  website: String,
  userId:String,
});

module.exports = mongoose.model('User', userSchema);
