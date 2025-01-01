const usersmodels=require('../models/usermodels')
const jwt=require('jsonwebtoken')

const loginuser=async(req ,res)=>{


    try {
        const {email,password} = req.body;
      
        
        if (!email||!password) {
            return res.status(501).send({
                success : false,
                message : "All filed is required"
            })
        }
        let user = await usersmodels.findOne({email : email});
 
        
        if(!user || user.password != password){
            return res.status(501).send({
                success : false,
                message : "Email and Password not valid",
            })
        }
        
const token=await jwt.sign({payload:user},"vora",{expiresIn:"1hr"})

return res.status(200).send({
    success : true,
    token : token
})

    } catch (error) {
        return res.status(501).send({
            success : false,
            err : error
        })
    }
}


module.exports={
    loginuser
}