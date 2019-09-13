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

  res.json(user);
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
        { dateEnd: { $gte: InputStart } }]
      }]

  }).populate('userId', [], User).exec();

  res.json(usersWithTimeline);
});

router.get('/todaylocation',  async (req, res) => {
  let {  place:InputPlace } = req.query;
  const today = new Date();

      const usersWithTimeline = await Timeline.find({
        $and: [
          { place: InputPlace },
          {
            $or: [{ dateStart: { $lte: today } },
            { dateEnd: { $lte: today } }]
          }]
    
      });

res.json(usersWithTimeline).populate('userId',[],User).exec();
});


router.post('/timeline', (req, res) => {
  const { userId, dateStart, dateEnd, place } = req.body;
  const timeline = new Timeline({
    userId,
    dateStart,
    dateEnd,
    place,
  });
  timeline.save();
});
module.exports = router;
