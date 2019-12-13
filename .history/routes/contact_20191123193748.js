const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


router.get('/', ensureAuthenticated, (req, res) =>
  res.render('contact.ejs', {
    user: req.user
  })
);




module.exports = router;