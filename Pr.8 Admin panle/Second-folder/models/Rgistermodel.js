const mongoose = require("mongoose");

const RgisterSchema =  new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    // role: {
    //     type: String,
    //     required: true,
    //     enum: ['admin', 'user']
    // }
})
const Rgister =  mongoose.model('Rgister', RgisterSchema)

module.exports = Rgister;