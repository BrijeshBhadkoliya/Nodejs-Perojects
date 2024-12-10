const express = require('express')
const UserModels = require('../models/LoginModels');
const { render } = require('ejs');
const  DataModel = require('../models/BlogData');
const fs = require('fs');
const mongoose = require('mongoose');
const Register = (req , res) => {
    if(res.locals.users){
        return res.redirect('AdminPanle');
    }
    return res.render('Register');
} 
 
 

 
const RgisterData = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existing = await UserModels.findOne({ email: email });
        console.log("Existing user:", existing);

         

        // Create a new user in the database
        await UserModels.create({
            name,
            email,
            password
        });

        console.log("Data added to MongoDB");
        return res.render("Login");

    } catch (error) {
        console.error("Error in RegisterData:", error);
        return res.status(500).send("An error occurred while processing your request.");
    }
};


    const LoginData = async(req ,res) =>{
        const {email,password} = req.body;

        const user = await UserModels.findOne({email:email})
        if(!user&& !password){
        return res.redirect('/')
        }
      
     
  
        return res.render('AdminPanle' ,{user});

    }


 const Logout = async (req , res)=>{
    return  res.render('Login')
}
 const AdminPanle = async (req , res)=>{
    return res.render('AdminPanle')
 }

const addData = async (req, res) => {
    try { 
    const { heading, date, description, userdata} = req.body;
     
     await DataModel.create({
        heading:heading,
        date:date,
        description:description,
        image: req.file.path

    })
    const user = await UserModels.findById(userdata)
   
    console.log('record add');
    const data = await DataModel.find({});
    return res.render('view',{user , data});
}catch (err) { 
    console.log(err);
    return false; 

    
}
}  
 
 
 
 const deleteData = async (req, res) => {
    const id  = req.query.id;
    const userdata = req.query.userdata;
    try {
        let single = await DataModel.findById(id)
        fs.unlinkSync(single.image)
     await DataModel.findByIdAndDelete(id);

     const data = await DataModel.find({})
        const user = UserModels.findById(userdata);
       
       
      console.log(data);
      
       return res.render('view', {user , data});
    } catch (err) {
        console.log(err);
        
       return false
    }
  };   

  const edit = async (req,res) =>{
    const id = new mongoose.Types.ObjectId(req.query.id);
    const userdata = req.query.userdata;
    console.log(userdata);   
    
    const data = await DataModel.findById(id);
    const user = await UserModels.findById(userdata);
    return res.render('edit', {data ,user});
  }

const update = async (req, res) =>{
    try {
        if (req.file) {
            const { heading, date, description , editid, userdata} = req.body;
            let single = await DataModel.findById(editid)
        
            const data = await DataModel.find({});
            const user = await UserModels.findById(userdata);
            console.log(user);
            
            fs.unlinkSync(singal.image)
            
            await DataModel.findByIdAndUpdate(editid, {heading, date, description ,
                image: req.file.path
                
            });
            console.log('Data updated');
                return res.render('view', {user, data});
        } else {
            const { heading, date, description , editid, userdata} = req.body;
        
            let single = await DataModel.findById(editid)
            const data = await DataModel.find({});
            const user = await UserModels.findById(userdata);
            
      
            await DataModel.findByIdAndUpdate(editid, {heading, date, description ,
                image: single.image
                });
                console.log('Data updated');
                return res.render('view', {user, data});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
 
}

module.exports = {Register , RgisterData ,LoginData , Logout , addData , deleteData ,edit , update }