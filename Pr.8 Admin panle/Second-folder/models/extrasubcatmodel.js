const mongoose = require('mongoose')


const userschama = mongoose.Schema({
    categoryid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    
    subcategoryid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subcategory"
    },
    exsubcategory:{
        type:String,
        require:true
    },
    status:{
        type:String,
        default:'active'
    },
   
})

const Exsubcategory = mongoose.model('Exsubcategory',userschama)

module.exports = Exsubcategory