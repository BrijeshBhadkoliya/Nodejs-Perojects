const express = require("express");

const { Register, RgisterData , LoginData , Logout  } = require("../controller/BlogController");
const user = require("../models/LoginModels");
const Router = express.Router();
const multer = require('multer')


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const upload = multer({ storage: storage }).single("imges")

 Router.get('/',Register)
Router.post('/RgisterData',RgisterData)
Router.post('/LoginData',LoginData)
Router.get('/Logout',Logout)
module.exports = Router;