const mongoose = require('mongoose')

const ingridientSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    }
})

const Ingridient = mongoose.model('Ingridient', ingridientSchema)

module.exports= Ingridient