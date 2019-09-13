const passport = require('passport');
const express = require('express');
const auth = require('./auth');
const Timeline = require('../models/Timeline');
const User = require('../models/User');
const db = require('mongoose');


const router = express.Router();

router.get('/logged', auth, async (req, res) => {
  res.json(req.session.passport.user);
});
router.get('/login', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/logout', auth, async (req, res) => {
  req.session.destroy();
  res.send('false');
});

router.post('/timeline', (req, res) => {
  const {
    userId, dateStart, dateEnd, place,
  } = req.body;
  const timeline = new Timeline({
    userId,
    dateStart,
    dateEnd,
    place,
  });
  timeline.save();
});
module.exports = router;
