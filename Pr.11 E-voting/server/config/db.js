const monogoose = require('mongoose');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config();
mongoose.connect(process.env.MONGO_URI);
const db  = mongoose.connection;
db.on("connected", (err) => {
    if(err)throw err;
    console.log("Connected to database");
});
module.exports = db;