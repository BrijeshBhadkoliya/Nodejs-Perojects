const express = require('express');
const { Ragister , AddData, Login , Logindata , dash } = require('../controller/Ragister');

const Router = express.Router();

Router.get('/', Ragister)
Router.get('/login', Login)
Router.get('/dash', dash)

Router.post('/RagisterData', AddData)
Router.post('/Logindata', Logindata)

module.exports =  Router  