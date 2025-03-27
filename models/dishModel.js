const mongoose = require('mongoose')

const dishSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    recipe:{
        type:String,
        required: true
    }
})

const Dish = mongoose.model('Dish', dishSchema)

module.exports = Dish