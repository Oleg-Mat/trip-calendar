const passport = require('passport');
const express = require('express');
const auth = require('./auth');

const router = express.Router();

router.get('/logged', auth, async (req, res) => {
  res.json(req.session.passport.user);
});
router.get('/login', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/logout', auth, async (req, res) => {
  req.session.destroy();
  res.send('false');
});

router.get('/user/:_id', async (req, res) => { 

  const user = await User.findOne({_id:req.params._id});

  res.json(user);
});

router.get('/timeline/:_id',  async (req, res) => {

  const user = await User.findOne({_id:req.params._id});
  
  res.json(user);
});



module.exports = router;
