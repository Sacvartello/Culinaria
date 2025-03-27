const mongoose = require('mongoose')

const likedSchema = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'User',
        required:true
    },
    dishId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Dish',
        required:true
    },
})

const Liked = mongoose.model('Liked', likedSchema)

module.exports= Liked