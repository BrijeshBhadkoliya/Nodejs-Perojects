const express = require('express')

const Router = express.Router();

const { firstPage , add , addData , deletRecord , editData , Upgreat } = require('../controllers/MovieController')

const multer = require('multer')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix =  Math.floor(Math.random()*100000)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const  fileupload = multer({ storage: storage }).single("description");


Router.get('/', firstPage );
Router.get('/add', add );
Router.post('/addData', fileupload , addData );
Router.get('/deletRecord', deletRecord );
Router.get('/editData', editData );
Router.post('/Upgreat',fileupload, Upgreat );


module.exports = Router;