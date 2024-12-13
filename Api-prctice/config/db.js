const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://BrijeshBhadkoliya:Brijesh%23123@cluster0.xfebr.mongodb.net/api')

const database = mongoose.connection;

database.on('connected',(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`database is connected`);
    
})
module.exports = database; 