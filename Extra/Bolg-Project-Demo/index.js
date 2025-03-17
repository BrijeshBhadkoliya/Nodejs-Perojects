const express = require('express');
const env = require('dotenv');
const db = require('./config/db');
const app = express();
env.config();
const port = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, (err) => {
    if(err) throw console.log(err);

    console.log(`Server is running on port http://localhost:${port}/`);
    
})