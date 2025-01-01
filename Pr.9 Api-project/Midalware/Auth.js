const jwt=require('jsonwebtoken')
const  verifyToken=async(req, res,next)=>{
try {
    const token=req.headers.authorization
 
  
    if (!token) {
        return res.status(501).send({
            success : false,
            message : "Token Is blank"
        })
    }
    let newtoken=token.slice(7)
  
    
    jwt.verify(newtoken,"vora",(err,decodetoken)=>{
            if (err) {
                return res.status(400).send({
                    success : false,
                    message : "Token is not valid",
                })   
            }
            req.user = decodetoken.payload;
            return next();
    })
} catch (error) {
    return res.status(501).send({
        success : false,
        err : error
    })
}
}
const admin=async(req, res,next)=>{
try {
   if(req.user.role !=="admin"){
    return res.status(400).send({
        success : false,
        message : "Unauthorised Access",
    }) 

   }
    return next()
} catch (error) {
    console.log(error);
    
}
}

module.exports={
    verifyToken,admin
}