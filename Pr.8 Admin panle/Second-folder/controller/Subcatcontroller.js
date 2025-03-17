const CategoryModel = require('../models/categorymodel')
const SubcatModel = require('../models/SubcatModels')

const addsubcategory = async (req,res) => {
    let category= await CategoryModel.find({status:'active'})

    return res.render('subcategory',{category:category})
}

const addsubcategoryData = async (req,res) => {
    const {category,SubCategoty}=req.body
    await SubcatModel.create({
        categoryid:category,
        subcategory:SubCategoty
        
    });

    return  res.redirect('/AdminPanale/addsubcategory')
    
}

const veiwsubcategory = async (req,res) => {
    const tablesubcategory =  await SubcatModel.find({}).populate('categoryid');
    console.log(tablesubcategory);
    
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


module.exports = {addsubcategory , addsubcategoryData , veiwsubcategory , subChangeStatus , editsubCategory , Updatesubcategory , deletesubCategory }