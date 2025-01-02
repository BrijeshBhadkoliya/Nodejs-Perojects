const mongoose = require('mongoose')


const userschama = mongoose.Schema({
    categoryid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    
    subcategory:{
        type:String,
        require:true
    },
    status:{
        type:String,
       default:'active'
    },
   
})

const subcategory = mongoose.model('subcategory', userschama)

module.exports = subcategory 