const express = require('express');
const path = require('path');
const app = express();
const db = require('./config/db')
const PORT = 8000;


// auth-session section 


// Set the cookie-parser code
const cookieparser = require('cookie-parser');
app.use(cookieparser())


// Set passport JS code 

const passport = require('passport');
const passportlocal = require('./config/passport-local');
const session = require('express-session');

app.use(session({
    secret: 'admin',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 60000 * 60 * 24,
        secure: false
     }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

// Set the view engine to EJS
app.set('view engine', 'ejs');



// Serve static files from the "Public" folder
app.use(express.static(path.join(__dirname, 'Public')));



// Middleware to parse URL-encoded data (if needed)
app.use(express.urlencoded({ extended: true }));



// Route to render the homepage 
app.use('/' , require('./Router/indexRouter'))



// Start the server
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server is running on http://localhost:${PORT}/`);
});
