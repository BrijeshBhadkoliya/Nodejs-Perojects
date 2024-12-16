    const CategoryModel = require('../models/categorymodel')
    const SubcatModel = require('../models/SubcatModels')
    const  Extrasubcatmodel = require('../models/extrasubcatmodel');
    const ProductModel = require('../models/Productsmodel');
    const path = require('path');
    const fs = require('fs')

    const addproducts = async (req ,res) => {
        
            let category= await CategoryModel.find({status:'active'})
            let subcategory = await SubcatModel.find({status:'active'})
            let exsubcategory = await Extrasubcatmodel.find({status:'active'})
    
        return res.render('Addproducts', {category:category , subcategory:subcategory , exsubcategory:exsubcategory})
    }
    const addproductdata = async (req ,res) =>{
        const {category,subcategory , exsubcategory , name , price , desc } = req.body
        await ProductModel.create({
            categoryid:category,
            subcategoryid:subcategory,
            exsubcategoryid: exsubcategory,
            name,
            price,
            desc ,
            image:req.file.path
        });

        return  res.redirect('/AdminPanale/addproducts')
    }


const viewproducts = async (req, res) => {

    const tableproduct =  await ProductModel.find({}).populate('categoryid').populate('subcategoryid').populate('exsubcategoryid');
    return  res.render('viewproducts', {table:tableproduct});

}

const proChangeStatus = async (req , res) => {
    const id = req.query.id;
    const status = req.query.status;
 
   if (status=="active") {    

              await ProductModel.findByIdAndUpdate(id,{status:"deactive"})
              return res.redirect('/AdminPanale/viewproducts')
              
              } else if((status=="deactive")){      
              
              await ProductModel.findByIdAndUpdate(id,{status:"active"})
              return res.redirect('/AdminPanale/viewproducts')
              
              }
}

const deleteproduct = async (req , res) => {
    const id = req.query.id;
    const single = await ProductModel.findById(id);
    console.log(single.image);
    
    fs.unlinkSync(single.image)

    await ProductModel.findByIdAndDelete(id);
   
    return res.redirect('/AdminPanale/viewproducts')
   
}
 
const editproduct = async (req , res) => {
    const id = req.query.id;
    const category = await CategoryModel.find({status:'active'})
    const subcategory = await SubcatModel.find({status:'active'})
    const exsubcategory = await Extrasubcatmodel.find({status:'active'})

    const product = await ProductModel.findById(id).populate('categoryid').populate('subcategoryid').populate('exsubcategoryid')
   
    console.log(product);
    
    
  
      
    return res.render('editproduct',{ subcategory, category , exsubcategory , product})
}

const updateproductdata = async (req ,res) => {
    const {editexsubCategoty , editsubCategoty , editCategoty , name , price ,desc , editid} = req.body
    if (req.file) {

 
         const single = await ProductModel.findById(editid);

        console.log(single);
        
        fs.unlinkSync(single.image)
        await ProductModel.findByIdAndUpdate(editid , {
            categoryid:editCategoty , subcategoryid:editsubCategoty , exsubcategoryid:editexsubCategoty , name , price ,desc , image:req.file.path});
 
        return res.redirect('/AdminPanale/viewproducts')

    } else {

        const single = await ProductModel.findById(editid);


        await ProductModel.findByIdAndUpdate(editId, {
            name,
            price,
            pages,
            image: single.image
        })
       
        return res.redirect('/AdminPanale/viewproducts')

    }
      
}

module.exports = { addproducts , addproductdata , viewproducts , proChangeStatus , deleteproduct , editproduct , updateproductdata}