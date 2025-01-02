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
    exsubcategoryid:{
          type:mongoose.Schema.Types.ObjectId,
        ref:"Exsubcategory"
    },
    name:{
    type:String,
    require:true
    },
    price:{
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
    },
    status:{
        type:String,
       default:'deactive'
    },
   
})

const producat = mongoose.model('producat',userschama)

module.exports = producat