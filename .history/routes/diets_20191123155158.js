const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.get('/', ensureAuthenticated, (req, res) =>
  res.render('diets', {
    user: req.user
  })
);

router.get('/progress', ensureAuthenticated, (req, res) =>
  res.render('progress', {
    user: req.user
  })
);

module.exports = router;