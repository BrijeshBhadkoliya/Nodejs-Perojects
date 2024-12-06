const express = require('express');

const app = express();

const port = 8000;

const db = require('./config/db');
const User = require('./models/UserModel');
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.get('/', (req, res) =>{
 return res.render('view')
});
 app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server listening on ${port}`);
    console.log(`http://localhost:${port}`);
 });