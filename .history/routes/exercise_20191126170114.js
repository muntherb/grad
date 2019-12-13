const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


router.get('/', ensureAuthenticated, (req, res) =>
  res.render('exercises', {
    user: req.user
  })
);




module.exports = router;