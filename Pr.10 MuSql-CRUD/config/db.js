const mysql = require('mysql2');
const dot = require('dotenv');
dot.config();

const  connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});
module.exports = connection.promise();;