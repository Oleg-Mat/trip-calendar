const User = require('../models/User');

function deserialize(id, done) {
  User.findOne({ googleId: id.googleId }, (err, user) => {
    done(err, user);
  });
}
module.exports = deserialize;
