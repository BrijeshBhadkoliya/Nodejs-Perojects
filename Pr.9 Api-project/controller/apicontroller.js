
const usermodels=require('../models/usermodels')
const adddata=async(req, res)=>{
try {

    const {name,password,email,city,phone}=req.body

    
if (!name||!password||!email||!city || !phone) {
    return res.status(500).send({
        sucess:false,
        message : "All filed is required",
    })
}

let dup=await usermodels.findOne({email:email})
if (dup) {
    return res.status(500).send({
        sucess:false,
        message : "users already register",
    })
}

    const users=await usermodels.create({
        name:name,
        password:password,
        email:email,
        city:city,
        phone:phone,
    })

return res.status(200).send({
    sucess:true,
    message:"user successfully create",
    users
})
    
} catch (error) {
    return res.status(500).send({
        sucess:false,
        err:error
    })
}

}

const viewuser=async (req , res)=>{
    try {
        const users=await usermodels.find({})
        return res.status(200).send({
            sucess:true,
            length:users.length,
            message:"user successfully fetch",
            users
        })


    } catch (error) {
        return res.status(501).send({
            success : false,
            err : error
        })
    }
}

const deleteusers=async (req, res)=>{

    try {
        const id=req.query.id;
        
        const users=await usermodels.findByIdAndDelete(id)
        return res.status(200).send({
            sucess:true,
            message:"user successfully delete",
        })
        
    } catch (error) {
        console.log(error);
        return false
        
    }

}


const updateusers=async (req, res)=>{
try {
    const {id,name,password,email,city,phone}=req.body
    console.log(req.body);
    
    const users=await usermodels.findByIdAndUpdate(id,{
        name:name,
        password:password,
        email:email,
        city:city,
        phone:phone,
    })
    return res.status(200).send({
        sucess:true,
        message:"user successfully update",
        users
    })
} catch (error) {
    return res.status(501).send({
        success : false,
        err : error
    })
}
}
module.exports={
    adddata,viewuser,deleteusers,updateusers
}