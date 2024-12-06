const mongoose = require('mongoose');

const UserSche = mongoose.Schema( {
    
        username: { 
            type: String, 
            required: true 
        },
        email: { 
            type: String,
             required: true  
              },
        password: { 
            type: String, 
            required: true
         },
        gender: { 
            type: String, 
            required: true 
        },
          hobby:  { 
            type: Array,
             required: true
             },
          city: {
            type: String, 
            required: true
         },
          phone: { 
            type: Number,
             required: true
            }
    }
);

const User = mongoose.model('User',UserSche);

module.exports = {User};