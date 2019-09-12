const db = require('mongoose');

const UserSchema = new db.Schema({
  createDate: { type: Date, default: new Date() },
  googleId: db.Schema.Types.Mixed,
  firstName: String,
  lastName: String,
  fullName: String,
});
UserSchema.statics.findOrCreate = async function (profile, cb) {
  let user = await this.findOne({ googleId: profile.id });
  if (!user) {
    user = new db.model('User', UserSchema)({
      googleId: profile.id,
      firstName: profile.name.familyName,
      lastName: profile.name.givenName,
      fullName: profile.displayName,
    });
    await user.save();
  }
  const err = '';
  cb(err, user);
};
module.exports = db.model('User', UserSchema);
