const express = require('express');

const routes = express.Router();

routes.use('/',require('./authRoute'));


module.exports = routes;