const express=require('express')

const routes=express.Router()

const { admin, verifyToken } = require('../Midalware/Auth')
const { allPost, allcommnet, allcomment } = require('../controller/admincotroller')

routes.get('/allpost',verifyToken,admin,allPost)
routes.get('/allcomment',verifyToken,admin,allcomment)

module.exports=routes