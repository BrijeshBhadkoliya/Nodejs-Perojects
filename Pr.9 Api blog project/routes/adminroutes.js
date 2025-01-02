const express = require('express');

const routes = express.Router();

const { getAllPosts, getAllComments } = require('../controller/admincotroller');  

routes.get('/allposts', verifyToken, admin, getAllPosts);
routes.get('/allcomments', verifyToken, admin, getAllComments);

module.exports = routes;
