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
    await SubcatModel.create({
        categoryid:category,
        subcategoryid:subcategory,
        exsubcategory: ExtraubCategoty
    });

    return  res.redirect('/AdminPanale/addsubcategory')
    
}

const veiwsubcategory = async (req,res) => {
    const tablesubcategory =  await SubcatModel.find({}).populate('categoryid');
    return  res.render('veiwsubcategory', {table:tablesubcategory});
}




const subChangeStatus = async (req, res) => {

    const id = req.query.id;
    const status = req.query.status;
 
   if (status=="active") {    

              await SubcatModel.findByIdAndUpdate(id,{status:"deactive"})
              return res.redirect('/AdminPanale/veiwsubcategory')
              
              } else if((status=="deactive")){      
              
              await SubcatModel.findByIdAndUpdate(id,{status:"active"})
              return res.redirect('/AdminPanale/veiwsubcategory')
              
              }
} 

 
const  editsubCategory= async (req, res) => {
    const id = req.query.id;
    const category = await CategoryModel.find({status:'active'})
    const subcategory = await SubcatModel.findById(id).populate('categoryid')
    console.log(subcategory);
    
  
      
    return res.render('editsubcat',{subcategory, category})
 }

 const Updatesubcategory = async (req, res) => {
    const {editsubCategoty, editCategoty , editid } = req.body;
    await SubcatModel.findByIdAndUpdate(editid , {categoryid:editCategoty , subcategory:editsubCategoty});
    return res.redirect('/AdminPanale/veiwsubcategory')
 }

 const deletesubCategory = async (req, res) => {
    const id = req.query.id;
    await SubcatModel.findByIdAndDelete(id);
    return res.redirect('/AdminPanale/veiwsubcategory')
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

module.exports = {addextrasubcategory , addextrasubcategoryData , ajaxdata}
