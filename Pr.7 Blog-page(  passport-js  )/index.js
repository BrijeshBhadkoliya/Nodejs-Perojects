const { render } = require("ejs");
const express = require("express")

const UserModels = require('./models/LoginModels')
const port =  8000;
const path = require('path')
const db = require('./config/db')
const app = express();
const passport = require('passport')

const passportlocal = require('./config/passportlocal')

const session = require('express-session');

app.use(session({
    secret: 'nikhil',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setUser);
app.use(express.urlencoded())
app.use('/',express.static(path.join(__dirname,'/public')))

 
app.set('view engine' , "ejs");


 




app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.use(express.urlencoded({extended:true}))

app.use('/', require('./router/indexRoutes'))



app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is Runing`);
    console.log(`http://localhost:${port}/`);
 
    
})