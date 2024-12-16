const express = require('express');

const router = express.Router();


// passport require 

const { adminpanel, myprofile } = require('../controller/Adminpanle-cotro');
const {Categoty , CatagoryData , ViewCateg , ChangeStatus , editCategory , updateCategory , deleteCategory} = require('../controller/Catgorycontoller');
const {addsubcategory , addsubcategoryData} = require('../controller/Subcatcontroller')
router.get('/',adminpanel)
router.get('/myprofile', myprofile)

// Categoty section 
router.get('/Categoty', Categoty);
router.post('/CatagoryData',CatagoryData)
router.get('/viewCategoty', ViewCateg)
router.get('/changeStatus', ChangeStatus)
router.get('/editcategory' , editCategory)
router.post('/Updatecategory' , updateCategory)
router.get('/deleteCategory' , deleteCategory)

// Subcategory section 
router.get('/addsubcategory' , addsubcategory)
router.post('/addsubcategoryData' , addsubcategoryData) 
module.exports = router;