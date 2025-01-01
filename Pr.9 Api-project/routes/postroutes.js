const express=require("express")
const {  addblog, viewblog, deleteblog, updateblog } = require("../controller/postcontroller")
const { verifyToken } = require("../Midalware/Auth")

const routes=express.Router()

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uplaods')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
  
  const upload = multer({ storage: storage }).single('image')

routes.post('/addblog',verifyToken,upload,addblog)
routes.get('/viewblog',verifyToken,viewblog)
routes.delete('/deleteblog',verifyToken,deleteblog)
routes.put('/updateblog',verifyToken,upload,updateblog)

module.exports= routes
