const path = require('path');
const fs = require('fs');

module.exports.login =  (req , res) => {
      return  res.sendFile(__dirname + '/login.html');
      return res.send('Login page');
} 


 