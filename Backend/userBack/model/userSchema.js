const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : {
        type : String
    }, 
    password : {
        type : String
    },
    username : {
        type : String
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})



module.exports = mongoose.model('user', userSchema)
