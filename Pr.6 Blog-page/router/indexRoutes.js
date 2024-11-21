const express = require("express");

const { Register, RgisterData , LoginData } = require("../controller/BlogController");
const Router = express.Router();

 Router.get('/',Register)
Router.post('/RgisterData',RgisterData)
Router.post('/LoginData',LoginData)
module.exports = Router;