const express = require('express')

const Router = express.Router();

const { firstPage , add , addData , deletRecord , editData , Upgreat } = require('../controllers/MovieController')

Router.get('/',firstPage)
Router.get('/add',add);
Router.post('/addData', addData );
Router.get('/deletRecord', deletRecord );
Router.get('/editData', editData );
Router.get('/Upgreat', Upgreat );


module.exports = Router;