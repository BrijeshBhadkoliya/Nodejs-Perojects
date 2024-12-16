const express = require('express');

const router = express.Router();


// passport require 
// panal 
const { adminpanel, myprofile } = require('../controller/Adminpanle-cotro');

// category 
const {Categoty , CatagoryData , ViewCateg , ChangeStatus , editCategory , updateCategory , deleteCategory} = require('../controller/Catgorycontoller');

// sub category 
const {addsubcategory , addsubcategoryData , veiwsubcategory , subChangeStatus , editsubCategory , Updatesubcategory, deletesubCategory } = require('../controller/Subcatcontroller');
const { addextrasubcategory , addextrasubcategoryData , ajaxdata} = require('../controller/Extracatcontroller');
router.get('/',adminpanel)

// extra subcategory 



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
router.get('/veiwsubcategory' , veiwsubcategory) 
router.get('/subChangeStatus' , subChangeStatus)
router.get('/editsubCategory' , editsubCategory) 
router.post('/Updatesubcategory' , Updatesubcategory)
router.get('/deletesubCategory' , deletesubCategory)

// extra sub category
router.get('/addextrasubcategory' , addextrasubcategory)
router.post('/addextrasubcategoryData' , addextrasubcategoryData)
router.get('/ajaxdata' , ajaxdata)
module.exports = router;