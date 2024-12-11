const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/adminpanel`);

const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`database is connected`);
    
})
module.exports = db;
