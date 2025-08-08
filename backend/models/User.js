const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  location: String,
  role: String,
  profileImage: String,
});

module.exports = mongoose.model('User', userSchema);
