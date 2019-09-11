const db = require('mongoose');

const ImgSchema = new db.Schema({
  createDate: { type: Date, default: new Date() },
  username: String,
  description: String,
  src: String,
  tmb_src: String,
});
module.exports = db.model('Image', ImgSchema);
