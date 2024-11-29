const express = require('express')
const UserModels = require('../models/LoginModels');
const { render } = require('ejs');

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
module.exports = {Register , RgisterData ,LoginData , Logout  }