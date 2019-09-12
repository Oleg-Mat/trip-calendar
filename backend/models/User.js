const db = require('mongoose');

const UserSchema = new db.Schema({
  createDate: { type: Date, default: new Date() },
  googleId: db.Schema.Types.Mixed,
});
UserSchema.statics.findOrCreate = async function (id, cb) {
  let user = await this.findOne({ googleId: id.googleId });
  if (!user) {
    user = new db.model('User', UserSchema)({
      googleId: id.googleId,
    });
    await user.save();
  }
  const err = '';
  cb(err, user);
};
module.exports = db.model('User', UserSchema);
