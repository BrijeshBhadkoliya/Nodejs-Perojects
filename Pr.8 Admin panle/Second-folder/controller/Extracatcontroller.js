const CategoryModel = require('../models/categorymodel')
const SubcatModel = require('../models/SubcatModels')
const  Extrasubcatmodel = require('../models/extrasubcatmodel');


const addextrasubcategory = async (req,res) => {
    let category= await CategoryModel.find({status:'active'})
     let subcategory = await SubcatModel.find({status:'active'})
    return res.render('extrasubcategory',{category:category , subcategory:subcategory})
}

const addextrasubcategoryData = async (req,res) => {
    const {category,subcategory , ExtraubCategoty}=req.body
    await Extrasubcatmodel.create({
        categoryid:category,
        subcategoryid:subcategory,
        exsubcategory: ExtraubCategoty
    });

    return  res.redirect('/AdminPanale/addextrasubcategory')
    
}

const veiwexsubcategory = async (req,res) => {
    const tableexsubcategory =  await Extrasubcatmodel.find({}).populate('categoryid').populate('subcategoryid');
    return  res.render('veiwexsubcategory', {table:tableexsubcategory});
}




const exsubChangeStatus = async (req, res) => {

    const id = req.query.id;
    const status = req.query.status;
 
   if (status=="active") {    

              await Extrasubcatmodel.findByIdAndUpdate(id,{status:"deactive"})
              return res.redirect('/AdminPanale/veiwexsubcategory')
              
              } else if((status=="deactive")){      
              
              await Extrasubcatmodel.findByIdAndUpdate(id,{status:"active"})
              return res.redirect('/AdminPanale/veiwexsubcategory')
              
              }
} 

 
const  editexsubCategory= async (req, res) => {
    const id = req.query.id;
    const category = await CategoryModel.find({status:'active'})
    const subcategory = await SubcatModel.find({status:'active'})
    const exsubcategory = await Extrasubcatmodel.findById(id).populate('categoryid').populate('subcategoryid')
   
    
    
  
      
    return res.render('editexsubcat',{ subcategory, category , exsubcategory})
 }

 const Updateexsubcategory = async (req, res) => {
    const {editexsubCategoty ,editsubCategoty, editCategoty , editid } = req.body;
    await Extrasubcatmodel.findByIdAndUpdate(editid , {categoryid:editCategoty , subcategoryid:editsubCategoty , exsubcategory:editexsubCategoty});
    return res.redirect('/AdminPanale/veiwexsubcategory')
 }

 const deleteexsubCategory = async (req, res) => {
    const id = req.query.id;
    await Extrasubcatmodel.findByIdAndDelete(id);
    return res.redirect('/AdminPanale/veiwexsubcategory')
 }
const ajaxdata = async (req, res) => {

    const id = req.query.id;

    const category = await SubcatModel.find({categoryid:id})
   return res.send({
       success:true,
       message:'hali gayu',
       category
   })

}
const ajaxsubdata = async (req, res) => {

    const id = req.query.id;

    const category = await Extrasubcatmodel.find({subcategoryid:id})
   return res.send({
       success:true,
       message:'sub hali gayu',
       category
   })

}

module.exports = {addextrasubcategory , addextrasubcategoryData , ajaxdata , veiwexsubcategory , exsubChangeStatus , editexsubCategory , Updateexsubcategory , deleteexsubCategory , ajaxsubdata}
