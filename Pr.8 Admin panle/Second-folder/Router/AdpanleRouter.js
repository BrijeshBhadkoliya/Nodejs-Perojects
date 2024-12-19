const express = require('express');

const router = express.Router();


// passport require 

// panal 
const { adminpanel, myprofile } = require('../controller/Adminpanle-cotro');

// category 
const {Categoty , CatagoryData , ViewCateg , ChangeStatus , editCategory , updateCategory , deleteCategory} = require('../controller/Catgorycontoller');

// sub category 
const {addsubcategory , addsubcategoryData , veiwsubcategory , subChangeStatus , editsubCategory , Updatesubcategory, deletesubCategory } = require('../controller/Subcatcontroller');

// extra subcategory 

const { addextrasubcategory , addextrasubcategoryData , ajaxdata , veiwexsubcategory , exsubChangeStatus , editexsubCategory , Updateexsubcategory , deleteexsubCategory , ajaxsubdata} = require('../controller/Extracatcontroller');

//product add router  
const { addproducts , addproductdata , viewproducts , proChangeStatus , deleteproduct , editproduct , updateproductdata} = require('../controller/Productcontroller');

//    multer  code   
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
  
  const  fileupload = multer({ storage: storage }).single("imges");



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
router.get('/veiwsubcategory' , veiwsubcategory) 
router.get('/subChangeStatus' , subChangeStatus)
router.get('/editsubCategory' , editsubCategory) 
router.post('/Updatesubcategory' , Updatesubcategory)
router.get('/deletesubCategory' , deletesubCategory)

// extra sub category
router.get('/addextrasubcategory' , addextrasubcategory)
router.post('/addextrasubcategoryData' , addextrasubcategoryData)
router.get('/ajaxdata' , ajaxdata)
router.get('/veiwexsubcategory' , veiwexsubcategory)
router.get('/exsubChangeStatus' , exsubChangeStatus)
router.get('/editexsubCategory' , editexsubCategory)
router.post('/Updateexsubcategory' , Updateexsubcategory)
router.get('/deleteexsubCategory' , deleteexsubCategory)
router.get('ajaxsubdata', ajaxsubdata)
//product add router 

router.get('/addproducts' , addproducts)
router.post('/addproductdata' ,fileupload, addproductdata) 
router.get('/viewproducts' , viewproducts)
router.get('/proChangeStatus' , proChangeStatus)
router.get('/deleteproduct' , deleteproduct)
router.get('/editproduct' , editproduct)
router.post('/updateproductdata' , fileupload , updateproductdata);
module.exports = router;