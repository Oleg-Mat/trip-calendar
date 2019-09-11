const db = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new db.Schema({
  createDate: { type: Date, default: new Date() },
  username: String,
});
UserSchema.plugin(passportLocalMongoose);
module.exports = db.model('User', UserSchema);
