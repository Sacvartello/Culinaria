const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true,
        min: [0, 'Age must be positive']
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User