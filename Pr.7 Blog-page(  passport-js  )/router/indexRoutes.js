const express = require("express");

const {
  Register,
  RgisterData,
  LoginData,
  Logout,
  addData,
  deleteData,
  edit,
  update,x

} = require("../controller/BlogController");
const Router = express.Router();
const multer = require("multer");
const passport = require('passport');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage }).single('image')

Router.get("/", Register);
Router.post("/RgisterData", RgisterData);
Router.post("/LoginData", passport.authenticate('local',{failureRedirect:'/'}),LoginData);
Router.get("/Logout", Logout);
Router.post("/addData", upload , passport.checkUser ,addData);
Router.get("/deletRecord", deleteData);
Router.get("/editData", edit);
Router.post("/Upgrat", upload , update)

module.exports = Router;
