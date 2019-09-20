const db = require('mongoose');

const UserSchema = new db.Schema({
  createDate: { type: Date, default: new Date() },
  googleId: db.Schema.Types.Mixed,
  firstName: String,
  lastName: String,
  fullName: String,
  locale: String,
  avatar: String,
  company: String,
  email: String,
  website: String,
  photo: String,
  group: [
    {
      groupname: String,
    },
  ],
  token: String,
  tokenExpires: { type: Date, default: new Date().setHours(new Date().getHours() + 1) },
  refreshToken: String,
});

UserSchema.statics.findOrCreate = async function (profile, accessToken, refreshToken, cb) {
  let user = await this.findOne({ googleId: profile.id });
  if (!user) {
    user = new db.model('User', UserSchema)({
      googleId: profile.id,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      fullName: profile.displayName,
      locale: profile._json.locale,
      photo: profile.photos[0].value,
      email: profile.emails[0].value,
      token: accessToken,
      refreshToken,
    });
    await user.save();
  }
  const err = '';
  cb(err, user);
};
module.exports = db.model('User', UserSchema);
