const mongoose = require('mongoose');
const env = require('dotenv');  
env.config();

mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection;

db.on('connected', (err) => {
  if(err) throw console.log( `❌${err}`);
    console.log('✅ Connected to MongoDB');
})
 