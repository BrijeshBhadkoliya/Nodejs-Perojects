const express = require('express');
const {  addData,
    viewUsers,
    deleteUser,
    updateUser,} = require('../controller/apicontroller'); 
const { verifyToken, admin } = require('../Midalware/Auth'); 

const routes = express.Router();

routes.post('/registeruser', addData); 
routes.get('/viewusers', verifyToken, admin, viewUsers);  
routes.delete('/deleteusers', deleteUser);  
routes.put('/updateusers', updateUser);

module.exports = routes;
