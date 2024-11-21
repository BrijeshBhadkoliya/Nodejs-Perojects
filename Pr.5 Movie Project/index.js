const express = require('express');

const port = 7200;
require('./config/db')
const app = express()
const mongoose = require('mongoose');
const UserModel = require('./modules/BookModels');  


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));


const path = require('path')

app.use("/uploads",express.static(path.join(__dirname,'uploads')))


app.use('/',require('./Routes/indexRoute'))



app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`server is runing http://localhost:${port}/add `);

}); 