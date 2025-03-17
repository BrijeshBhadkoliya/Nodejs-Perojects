const express = require('express');
const router = express.Router();
 
router.use('/', require('./Userlogin'));
module.exports = router;