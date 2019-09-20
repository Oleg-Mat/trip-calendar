const axios = require('axios');
const User = require('../models/User');

async function deserialize(id, done) {
  const user = await User.findById(id);
  const err = '';
  if (user) {
    if (new Date() > new Date(user.tokenExpires - 15 * 60 * 1000)) {
      const res = await axios.post('https://oauth2.googleapis.com/token', {
        refresh_token: user.refreshToken,
        client_id: process.env.clientId,
        client_secret: process.env.clientSecret,
        grant_type: 'refresh_token',
      });
      const accessToken = res.data.access_token;
      user.token = accessToken;
      user.tokenExpires = new Date().setHours(new Date().getHours() + 1);
      user.save();
      console.log('token updated');
    }
    done(err, user);
  } else {
    done(err, user);
  }
}
module.exports = deserialize;
