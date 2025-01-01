const express = require("express");
const { addBlog, viewBlog, deleteBlog, updateBlog } = require("../controller/postcontroller"); 
const { verifyToken } = require("../Midalware/Auth");  

const routes = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage }).single('image');

routes.post('/addblog', verifyToken, upload, addBlog);
routes.get('/viewblog', verifyToken, viewBlog);
routes.delete('/deleteblog', verifyToken, deleteBlog);
routes.put('/updateblog', verifyToken, upload, updateBlog);

module.exports = routes;
