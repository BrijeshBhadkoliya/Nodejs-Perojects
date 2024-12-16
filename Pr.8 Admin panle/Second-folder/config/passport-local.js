const passport = require('passport');
const passportlocal = require('passport-local').Strategy;

// Module require

const User = require('../models/Rgistermodel');

passport.use(new passportlocal(
  { usernameField: 'email' },
  async (email, password, done) => {
    
    try {
      const user = await User.findOne({ email : email});
       console.log(user);
       
      if (!user || user.password !== password) {

               console.log("Passwords do not match or email is not valid");       
               return done(null, false) 

      } 

      return done(null, user) 

    } catch (error) {
              console.error(error);
              return done(error);
    }
}));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {

       const user = await User.findById(id);
       return done(null, user);

      }catch(error) {
           console.log(error);
           return done(null, false);
        }

})
 
passport.checkUser = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/')
    }
    return next();
}
 
passport.setUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.users = req.user
    }
    return next();
}

module.exports=passport