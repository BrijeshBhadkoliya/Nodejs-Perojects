const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
       ref:'api'
    },
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})
const post=mongoose.model('blogusers',userschema)
module.exports=post