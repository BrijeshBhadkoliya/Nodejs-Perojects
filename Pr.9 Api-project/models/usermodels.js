const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default :"user"
    },
    
})
const user=mongoose.model('api',userschema)
module.exports=user