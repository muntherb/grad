const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/', ensureAuthenticated, (req, res) =>
  res.render('progress', {
    user: req.user
  })
);



module.exports = router;