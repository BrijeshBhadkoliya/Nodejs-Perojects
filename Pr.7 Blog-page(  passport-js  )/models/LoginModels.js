const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  
    name : {
        type:String,
        required : true,
    },
     email : {
        type : String,
        required : true,  
    },
    password : {
        type : String,
        required : true,
    }
    // imges:{
    //     type:String,
    //     require :true, 
    // }
})

const user = mongoose.model('user', userSchema);

module.exports = user