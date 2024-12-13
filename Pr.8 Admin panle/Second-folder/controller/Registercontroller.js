const RegisterModel = require('../models/Rgistermodel');

const Rgister = (req, res) => {
    // if(req.cookies['autho']){
    //     return res.render('index')
    //  }
     if(res.locals.users){
        return res.render('index')
        
     }
    return res.render('register')
}

const Login =  (req, res) => {
    // if(req.cookies['auth']){
    //     return res.render('index')
    //  }
     if(res.locals.users){
        return res.render('index')
     }
    return res.render('login')
}


// Add data 

const RegisterAddData = async(req, res) => {
 
    try {        
        const { username, email, password } = req.body;
        // console.log(username, email, password);
        await RegisterModel.create({
            username, 
            email,
            password
        });


    const chaeck = await RegisterModel.findOne({email:email})
    res.cookie('autho',chaeck)

                if(chaeck) {
                    return res.render('login');
                }
                
                    return  res.redirect('/');

                }catch(err) {
                      console.error(err);
                      return res.status(500).render('Alredy-exist')
                }
}


// Login data 

const LoginData = async(req, res) => {
   
    const {email, password} = req.body
    const reuser  = await RegisterModel.findOne({email: email})

     if(!reuser) {
                     return res.status(500).render('email-passswod')
                 }
     if(reuser.password !== password) {
              return res.status(500).render('passswod')
             }
    res.cookie('auth',reuser)
             
    return  res.render('index');
}


 
const forgotpassword = async (req, res) => {
    return res.render('forgot-password')
}

const getOtp = async (req, res) => {
    const {email} = req.body
    const nodemailer = require('nodemailer');

    console.log(email);
    
    // const reuser  = await RegisterModel.findOne({email: email})
    // if(!reuser) {
    //     return res.status(500).render('email-passswod')
    // }
    const otp = Math.floor(100000 + Math.random() * 900000)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bhadkoliyajbrijesh@gmail.com',
          pass: '561 0'
        }
      });
      
      var mailOptions = {
        from: 'bhadkoliyajbrijesh@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text:  `your Otp is ${otp}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.cookie('otp', otp)
    res.cookie('email', email)
    return res.redirect('forgot-password')
}
module.exports = { Rgister, Login , RegisterAddData , LoginData , forgotpassword , getOtp}