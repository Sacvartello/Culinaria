const {Dish} = require('../models')
module.exports.createDish = async(req,res,next)=>{
    try{
        const {body} = req
        const dish = await Dish.create(body)
        res.status(201).send(dish)
    } catch(err){
        next(err)
    }
}
module.exports.getOneDish = async(req,res,next)=>{
    try{
        const {params:{dishId}} = req
        const dish = await Dish.findById(dishId)
        res.status(200).send(dish)
    } catch(err){
        next(err)
    }
}
module.exports.getAllDishes = async(req,res,next)=>{
    try{
        const dishes= await Dish.find({})
        res.status(200).send(dishes)
    } catch(err){
        next(err)
    }
}
module.exports.updateDish = async(req,res,next)=>{
    try{
        const {body, params:{dishId}} = req
        const dish = await Dish.findByIdAndUpdate(dishId,body)
        res.status(200).send(dish)
    } catch(err){
        next(err)
    }
}
module.exports.deleteDish = async(req,res,next)=>{
    try{
        const {params:{dishId}} = req
        const dish = await Dish.findByIdAndDelete(dishId)
        res.status(200).send(dish)
    } catch(err){
        next(err)
    }
}