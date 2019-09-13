const passport = require('passport');
const express = require('express');
const db = require('mongoose');
const auth = require('./auth');
const Timeline = require('../models/Timeline');
const User = require('../models/User');

const router = express.Router();

router.get('/logged', auth, async (req, res) => {
  res.json(req.session.passport.user);
});
router.get('/login', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/logout', auth, async (req, res) => {
  req.session.destroy();
  res.send('false');
});

router.get('/user/:_id', auth, async (req, res) => {
  const user = await User.findOne({ _id: req.params._id });
  console.log(req.params);
  
  res.json(user);
});

router.post('/user/:_id/updateprofile', auth, async (req, res) => {
  const changedUser = {};
  changedUser.firstName = req.body.firstName;
  changedUser.lastName = req.body.lastName;
  changedUser.photo = req.body.photo;
  changedUser.company = req.body.company;
  changedUser.website = req.body.website;
  await User.findByIdAndUpdate({ _id: req.params._id }, { $set: { changedUser } }, { new: true }, (err, user) => {
    if (err) { console.log(err); }
  });
});

router.get('/timeline/:_id', auth, async (req, res) => {
  const user = await TimeLine.find({ userId: req.params._id });

  res.json(user);
});
router.get('/timelineonperiod', async (req, res) => {
  let { dateStart: InputStart, dateEnd: InputEnd, place: InputPlace } = req.query;

  InputEnd = new Date(InputEnd);
  InputStart = new Date(Date.parse(InputStart));

  const usersWithTimeline = await Timeline.find({
    $and: [
      { place: InputPlace },
      {
        $or: [{ dateStart: { $lte: InputEnd } },
          { dateEnd: { $gte: InputStart } }],
      }],

  }).populate('userId');

  res.json(usersWithTimeline);
});


router.post('/timeline', async (req, res) => {
  const {
    userId, dateStart, dateEnd, place,
  } = req.body;
  const timeline = new Timeline({
    userId,
    dateStart,
    dateEnd,
    place,
  });
  await timeline.save();
});
module.exports = router;
