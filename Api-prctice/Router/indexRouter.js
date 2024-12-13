const express = require('express');
const { user } = require('../controller/user');
const Router = express.Router();

Router.post('/user', user)

module.exports= Router