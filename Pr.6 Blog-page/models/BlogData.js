const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
  
    Heading : {
        type:String,
        // required : true,
    },
     Date : {
        type : String,
        // required : true,
    },
     Description : {
        type : String,
        // required : true,
    }
    // imges:{
    //     type:String,
    //     require :true,
    // }
})

const Data = mongoose.model('Data', DataSchema);

module.exports = Data