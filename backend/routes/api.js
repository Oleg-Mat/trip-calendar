const passport = require('passport');
const express = require('express');
const db = require('mongoose');
const axios = require('axios');
const auth = require('./auth');
const Timeline = require('../models/Timeline');
const User = require('../models/User');

const router = express.Router();

/* async function updateToken(req, res, next) {
  if (req.user) {
    if (req.user.tokenExpires > new Date(req.user.tokenExpires - 15 * 60)) {
      const res = await axios.post('https://oauth2.googleapis.com/token', {
        refresh_token: req.user.refreshToken,
        client_id: process.env.clientId,
        client_secret: process.env.clientSecret,
        grant_type: 'refresh_token',
      });
      const accessToken = res.data.access_token;
      req.user.token = accessToken;
      req.user.tokenExpires = new Date().setHours(new Date().getHours() + 1);
      await User.findByIdAndUpdate(req.user._id, {
        token: accessToken,
        tokenExpires: new Date().setHours(new Date().getHours() + 1),
      });
      console.log('token updated');
      next();
    }
  } else {
    next();
  }
}

router.use(updateToken); */
router.get('/logged', auth, async (req, res) => {
  const responce = {
    _id: req.user._id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    photo: req.user.photo,
    email: req.user.email,
    group: req.user.group,
  };
  res.json(responce);
});

// строчка чтоб обновить токены
// { accessType: 'offline', prompt: 'consent' }

router.get('/login', passport.authenticate('google', { accessType: 'offline', prompt: 'consent' }));

router.get('/logout', auth, async (req, res) => {
  req.session.destroy();
  res.send('false');
});

router.get('/user/:_id', auth, async (req, res) => {
  const user = await User.findOne({ _id: req.params._id });

  res.json(user);
});

router.get('/timeline/:_id', auth, async (req, res) => {
  const user = await Timeline.find({ userId: req.params._id });

  res.json(user);
});
router.get('/timelineonperiod', async (req, res) => {
  const { dateStart, dateEnd, place: InputPlace } = req.query;

  const InputEnd = new Date(+dateEnd);
  const InputStart = new Date(+dateStart);

  const usersWithTimeline = await Timeline.find({
    $and: [
      { place: InputPlace },
      { $and: [{ dateStart: { $lte: InputEnd } }, { dateEnd: { $gte: InputStart } }] },
      { userId: { $ne: req.user._id } },
    ],
  })
    .sort({ dateStart: 1 })
    .populate('userId')
    .exec();

  res.json(usersWithTimeline);
});

router.get('/todaylocation', async (req, res) => {
  const today = new Date();

  const usersWithTimeline = await Timeline.find({
    $and: [{ dateStart: { $lte: today } }, { dateEnd: { $gte: today } }],
  }).populate('userId');

  res.json(usersWithTimeline);
});

router.post('/timeline', async (req, res) => {
  const {
 userId, dateStart, dateEnd, place, googleId = '' 
} = req.body;
  console.log(process.env.apiKey);
  const placeObj = await axios.get(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&key=${process.env.apiKey}&`,
  );
  const { lat, lng } = placeObj.data.results[0].geometry.location;
  const placePicHash = placeObj.data.results[0].photos[0].photo_reference;
  console.log(placeObj.data.results[0].photos[0].photo_reference);
  const placePic = await axios.get(
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${placePicHash}&key=${process.env.apiKey}`,
  );

  const src = placePic.request._redirectable._currentUrl;

  const timeline = new Timeline({
    userId,
    dateStart,
    dateEnd,
    place,
    src,
    lat,
    lng,
    googleId,
  });
  timeline.save();
  res.json('true');
});
module.exports = router;
