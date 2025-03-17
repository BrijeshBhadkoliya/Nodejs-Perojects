const db = require('../config/db');
const mysql = require('mysql2');

const Ragister = (req,res) =>{
    return res.render('index')
}
const Login = (req,res) =>{
    return res.render('login')
}
const dash = (req,res) =>{
    return res.render('dash')
} 

const AddData = async (req,res) =>{
    try{
        const {name,email,password}= req.body
        console.log(req.body);
        await db.query("INSERT INTO ragister (Name, Email, Password) VALUES (?, ?, ?)",[name, email, password ])
        
        return  res.redirect('/'); 

    }catch(err){
        console.log(err);
        return false;
    }
}
const Logindata = async (req,res) =>{
    try{
        const {email,password}= req.body
        console.log(req.body);
        const [chack] =  await db.query("SELECT * FROM ragister WHERE Email=?",[email])
        console.log([chack]);
        if (chack.length == 0) {
            console.log('invalid email and password');  
        }
        if (chack[0].Password == password) {
            console.log('login success');  
            return  res.redirect('/dash'); 

        } else {
        console.log('invalid email and password');  
        return  res.redirect('/login'); 
        }

    }catch(err){
        console.log(err);
        return false;
    }
}

 
module.exports= {Ragister , AddData , Login , Logindata , dash}