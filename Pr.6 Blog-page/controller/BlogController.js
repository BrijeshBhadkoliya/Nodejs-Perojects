const express = require('express')
const UserModels = require('../models/LoginModels');
const { render } = require('ejs');

const Register = (req , res) => {
    return res.render('Register');
} 
const RgisterData = async(req , res) => {
    const {name,email,password} = req.body;
    await UserModels.create({
        name,
        email,
        password
    })
    console.log('data add in mongo');
    return res.render('Login')
    

}

const LoginData = async(req ,res) =>{
    const {email,password} = req.body;

    const user = await UserModels.findOne({email:email})
    if(user){
        return res.render('AdminPanle')
    }
    alert('all done')
}
module.exports = {Register , RgisterData ,LoginData}