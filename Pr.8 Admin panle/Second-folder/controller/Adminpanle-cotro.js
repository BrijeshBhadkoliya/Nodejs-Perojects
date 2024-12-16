const RegisterModel = require('../models/Rgistermodel');

const adminpanel = (req, res) => {
    return res.render('index')
}
 
const myprofile = async (req, res) => {
    const email = req.cookies.email
    const userprofile =  await RegisterModel.findOne({email:email})
     console.log(userprofile);
     
    res.render('myprofile', {userprofile})
}

 
module.exports = {adminpanel , myprofile}