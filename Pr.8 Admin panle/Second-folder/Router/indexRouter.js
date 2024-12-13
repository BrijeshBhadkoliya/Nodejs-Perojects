const express = require('express');

const router = express.Router();

router.use('/', require('./RegisterRouter'))
router.use('/AdminPanale',require('./AdpanleRouter'))

 
module.exports = router;