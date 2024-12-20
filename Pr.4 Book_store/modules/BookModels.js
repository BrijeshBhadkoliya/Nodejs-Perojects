const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  
    name : {
        type:String,
        required : true,
    },
    price : {
        type : String,
        required : true,
    },
    pages  :{
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    }
})

const user = mongoose.model('user', userSchema);

module.exports = user