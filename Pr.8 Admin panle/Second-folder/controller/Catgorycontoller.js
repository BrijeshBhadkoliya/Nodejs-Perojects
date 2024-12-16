const mongoose = require('mongoose');
const CategoryModel = require('../models/categorymodel')
const Categoty = async (req, res) => {

    return res.render('category')
 }
 const CatagoryData = async (req, res) => {

    const {Categoty} = req.body 
    console.log(Categoty);
    const tablecategory =  await CategoryModel.create({category: Categoty,});
   
    console.log(tablecategory);
    
   

    return  res.render('viewcategory', {table:[tablecategory]});
 }
 const ViewCateg = async (req, res) => {
   const tablecategory =  await CategoryModel.find({});

   return  res.render('viewcategory', {table:[tablecategory]});

 }

 const ChangeStatus = async (req, res) => {

           const id = req.query.id;
           const status = req.query.status;
                  console.log(id);
                  console.log(status);
           const tablecategory =  await CategoryModel.find({});

                  
     
       
   if (status=="active") {    

       await CategoryModel.findByIdAndUpdate(id,{status:"deactive"})
       return res.redirect('/AdminPanale/viewCategoty',{table:tablecategory})

   } else if((status=="deactive")){      

       await CategoryModel.findByIdAndUpdate(id,{status:"active"})
       return res.redirect('/AdminPanale/viewCategoty',{table:tablecategory})

   }
 } 

 const  editCategory= async (req, res) => {
    const id = req.query.id;
    console.log(id);
    
    const category = await CategoryModel.findById(id);
    return res.render('editctegory', {category:[category]})
 }

 const updateCategory = async (req, res) => {
    const {editCategoty , editid } = req.body;
    await CategoryModel.findByIdAndUpdate(editid , {category:editCategoty});
    return res.redirect('/AdminPanale/viewCategoty')
 }

 const deleteCategory = async (req, res) => {
    const id = req.query.id;
    await CategoryModel.findByIdAndDelete(id);
    return res.redirect('/AdminPanale/viewCategoty')
 }
 module.exports = {Categoty , CatagoryData, ViewCateg , ChangeStatus , editCategory , updateCategory , deleteCategory}