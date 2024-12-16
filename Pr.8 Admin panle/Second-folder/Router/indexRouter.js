const express = require('express');

const router = express.Router();
const passport = require('passport');

router.use('/',  require('./RegisterRouter'))
router.use('/AdminPanale', passport.checkUser,require('./AdpanleRouter'))

 
module.exports = router;