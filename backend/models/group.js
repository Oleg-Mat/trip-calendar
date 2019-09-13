const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupname: String,
  users: [
    {
      name: String,
    },
  ],
  title: String,
});

module.exports = mongoose.model('Group', groupSchema);
