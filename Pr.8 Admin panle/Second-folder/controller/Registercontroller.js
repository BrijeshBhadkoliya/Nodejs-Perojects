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
    res.cookie('email', email)
             
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
          pass: '5610'
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
    return res.render('Otp')
}

const chackOtp = async (req, res) => {
  const {otp} = req.body
  const userotp =  req.cookies.otp
  console.log(otp);
  console.log(userotp); 
  if(userotp == otp){
    return res.render('Change-password')  // change password page
  }
  return  res.render('forgot-password'); 
  
}
const changepassget = async (req, res) => {
  return  res.render('Change-password');

}
const changepassword = async (req, res) => {
  const {password , chagePassword } = req.body
     
      
      if(password == chagePassword){
        const email = req.cookies.email
        console.log(email);
        
        const userpass =  await RegisterModel.findOne({email:email})
        console.log(userpass);
        
        const editId = userpass._id


        await RegisterModel.findByIdAndUpdate(editId, {
          password:  chagePassword,
        })
        console.log(userpass);

        console.log(userpass._id);
      return  res.render('login'); 


      }
      
      return  res.render('Change-password');
 
}
const logout = async (req, res) => {
     req.logout((err)=>{
      if(err){
        console.log(err+'not out this page');
        return false
        
      } return res.redirect('/login')
     })
}
module.exports = { Rgister, Login , RegisterAddData , LoginData , forgotpassword , getOtp ,chackOtp ,changepassword , changepassget , logout}