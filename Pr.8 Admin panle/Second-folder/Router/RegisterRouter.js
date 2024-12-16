const express = require('express');
const  router = express.Router();


const { Rgister , Login , RegisterAddData, LoginData, forgotpassword , getOtp , chackOtp ,changepassword ,changepassget , logout } = require('../controller/Registercontroller');
const passport = require('passport');


// Request Url Data 


router.get('/', Rgister)
router.get('/login',Login)
router.post('/rgisterdata',RegisterAddData)
router.post('/logindata',passport.authenticate('local',{failureRedirect:'/login'}), LoginData)
router.get('/forgot-password', forgotpassword)
router.post('/getOtp', getOtp)
router.post('/chackOtp', chackOtp)
router.post('/change-password', changepassword)
router.get('/change-password', changepassget);
router.get('/logout' ,logout)
// Export Router 
module.exports = router; 