const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
  
    heading : {
        type:String,
        required : true,
    },
     date : {
        type : String,
        required : true,
    },
     description : {
        type : String,
        required : true,
    },
    image:{
        type:String,
        require :true,
    }
})

const Data = mongoose.model('Data', DataSchema);

module.exports = Data