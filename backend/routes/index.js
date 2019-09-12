const express = require('express');
const User = require('../models/users');


const router = express.Router();
// route for Home-Page
router.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});