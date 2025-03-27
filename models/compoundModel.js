const mongoose = require('mongoose')

const compoundSchema = mongoose.Schema({
    ingridientId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Ingridient',
        required:true
    },
    dishId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Dish',
        required:true
    },
})

const Compound = mongoose.model('Compound', compoundSchema)

module.exports= Compound