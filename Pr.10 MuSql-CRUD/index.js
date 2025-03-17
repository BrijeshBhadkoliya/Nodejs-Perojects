
const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = require('./config/db');

require('dotenv').config();

const port = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.urlencoded());
 
app.use('/', require('./Router/indexRouts'))

app.listen(port , (err)=>{
           if(err) throw err;
           console.log(`server is runig http://localhost:${port}/`);
});    