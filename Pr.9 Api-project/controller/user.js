 const userModle = require('../models/usermodel')
const user = async(req ,res) =>{
    const {email,password} = req.body
      const main =    await userModle.create({
            email,
            password
          })
    return res.status(200).send({message:"true", main})
 }

module.exports= {user}