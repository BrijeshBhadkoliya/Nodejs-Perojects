const mongoose=require('mongoose')


const userschama = new mongoose.Schema({
    category:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:'active'
    },
   
})

const category= mongoose.model('category',userschama)

module.exports = category