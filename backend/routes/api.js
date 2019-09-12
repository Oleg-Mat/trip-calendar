const passport = require('passport');
const express = require('express');
const auth = require('./auth');

const router = express.Router();

router.get('/logged', auth, async (req, res) => {
  res.send(true);
});
router.get('/login', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/logout', auth, async (req, res) => {
  req.session.destroy();
  res.send('false');
});

module.exports = router;
