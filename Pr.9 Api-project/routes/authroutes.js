const express = require('express');
const { loginUser } = require('../controller/authcontroller');  

const routes = express.Router();

routes.post('/login', loginUser); 

module.exports = routes;
