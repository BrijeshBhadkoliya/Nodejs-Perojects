const { render } = require("ejs");
const express = require("express")

const UserModels = require('./models/LoginModels')
const port =  8000;
const db = require('./config/db')
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path')

app.set('view engine' , "ejs");


app.use(cookieParser())

app.use('/',express.static(path.join(__dirname,'/public')))



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