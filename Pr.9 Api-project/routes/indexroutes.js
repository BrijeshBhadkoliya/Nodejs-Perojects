const express = require('express');

const routes = express.Router();

routes.use('/', require('./authroutes')); 
routes.use('/user', require('./apiroutes')); 
routes.use('/post', require('./postroutes'));  
routes.use('/admin', require('./authroutes')); 


module.exports = routes;
