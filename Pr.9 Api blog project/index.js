const express = require('express');
const port = 8000;

const app = express();

const db = require('./config/db');



const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes/indexroutes')); 

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);  
        return;
    }
    console.log(`Server is running on port: http://localhost:${port}/user/registeruser`);
});
