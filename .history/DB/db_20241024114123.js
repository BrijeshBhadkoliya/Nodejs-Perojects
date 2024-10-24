const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/connection',{
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,  // Increase to 30 seconds
        socketTimeoutMS: 45000,           // Increase socket timeout
      }
});

const database = mongoose.connection;

database.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('db is connected');
})

module.exports = database;