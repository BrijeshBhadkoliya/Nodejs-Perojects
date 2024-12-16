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
    let categorys= await CategoryModel.find({status:'active'})

    return  res.redirect('/AdminPanale/addsubcategoryData' , {category:categorys})
    // return res.render('subcategory')
}
module.exports = {addsubcategory , addsubcategoryData}