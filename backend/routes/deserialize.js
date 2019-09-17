const User = require('../models/User');

function deserialize(id, done) {
  User.findById(id, (err, user) => {
    done(err, user);
  });
}
module.exports = deserialize;
