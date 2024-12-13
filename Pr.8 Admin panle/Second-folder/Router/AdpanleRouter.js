const express = require('express');

const router = express.Router();


// passport require 
const passport = require('passport');

const { adminpanel } = require('../controller/Adminpanle-cotro');

// router.get('/',passport.authenticate('local',{failureRedirect:'/'}),adminpanel)
router.get('/',adminpanel)
 
 
module.exports = router;