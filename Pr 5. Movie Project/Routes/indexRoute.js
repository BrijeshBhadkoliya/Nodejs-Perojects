const express = require('express')

const Router = express.Router();

const { firstPage , add , addData , deletRecord , editData , Upgreat } = require('../controllers/MovieController')

const multer = require('multer')

const fs = require('fs');

const path = require('path')

app.use("/uploads", express.static(path.join(__dirname,"uplods")));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const  fileupload = multer({ storage: storage }.single("avtar"));


Router.get('/', firstPage );
Router.get('/add', add );
Router.post('/addData', fileupload , addData );
Router.get('/deletRecord', deletRecord );
Router.get('/editData', editData );
Router.post('/Upgreat',fileupload, Upgreat );


module.exports = Router;