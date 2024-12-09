const express = require('express')
const UserModels = require('../models/LoginModels');
const { render } = require('ejs');
const  DataModel = require('../models/BlogData');
const mongoose = require('mongoose');
const Register = (req , res) => {
    return res.render('Register');
} 
// const RgisterData = async(req , res) => {
//     const {name,email,password} = req.body;
   
//     const existing = await UserModels.findOne({ email:email });
//     console.log(existing);
    
//     if(existing) {
//         return res.redirect("/");
//     }

//     await UserModels.create({
//         name,
//         email,
//         password
//     })
//     console.log('data add in mongo');
//     return res.render('Login') 
// }
const firstPage = async (req, res) => {

    let data = await UserModel.find({})
    return res.render("veiw", { data })
};

const add = (req, res) => {
    return res.render('add');
};

const RgisterData = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists in the database
        const existing = await UserModels.findOne({ email: email });
        console.log("Existing user:", existing);

        // if (existing) {
        //     // If the user exists, redirect to the home page
        //     return res.redirect("/");
        // }

        // Create a new user in the database
        await UserModels.create({
            name,
            email,
            password
        });

        console.log("Data added to MongoDB");
        // Render the login page after successful registration
        return res.render("Login");

    } catch (error) {
        console.error("Error in RegisterData:", error);
        // Handle any errors and send an appropriate response
        return res.status(500).send("An error occurred while processing your request.");
    }
};


    const LoginData = async(req ,res) =>{
        const {email,password} = req.body;

        const user = await UserModels.findOne({email:email})
        if(!user&& !password){
        return res.redirect('/')
        }
      

        return res.render('AdminPanle',{user});

    }
 const Logout = async (req , res)=>{
    return  res.render('Login')
}
const addData = async (req, res) => {
    
    const { Heading, Date, Description} = req.body;
    // console.log(req.file);

     await DataModel.create({
        Heading,
        Date,
        Description,
        description: req.file.path
    })
    data = await DataModel.find({})
    console.log('record add');
    return res.render('view',{data});
};  

const deletRecord = async (req, res) => {
    let id = new mongoose.Types.ObjectId(req.query.id);
        
    await DataModel.findById(id)
    fs.unlinkSync(singal.description)
    console.log("id ====> ", id);
    await DataModel.findByIdAndDelete(id) 
        console.log("user delete");
        return res.render('view')
       
}

const editData = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.query.id)
    console.log(id);
    
    const data = await DataModel.findById(id)
    return res.render('edit', { data })
}
const Upgreat = async (req, res) => {
    const { editId, name, price, pages } = req.body

    // if (req.file) {

        // let singal = await DataModel.findById(editId)
        // console.log(singal);
        
        // fs.unlinkSync(singal.description)

        await DataModel.findByIdAndUpdate(editId, {
            Heading,
            Date,
            Description,
            // description: req.file.path
        })
        return res.redirect('view')
    // } else {

    //     const single = await DataModel.findById(editId);

    //     await DataModel.findByIdAndUpdate(editId, {
    //         Heading,
    //         Date,
    //         Description,
    //         // description: single.description
    //     })
    //     return res.redirect('AdminPanle');
    // }

}  

module.exports = {Register , RgisterData ,LoginData , Logout ,  firstPage, add, addData,deletRecord ,Upgreat,editData }