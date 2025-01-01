const express=require('express')

const routes=express.Router()

const { verifyToken } = require('../Midalware/Auth')

const { addCommnet } = require('../controller/commnetcontroller')

routes.post('/addcommnet',verifyToken,addCommnet)
module.exports=routes