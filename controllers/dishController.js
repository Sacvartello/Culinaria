const {Dish, Compound, Ingridient} = require('../models')
module.exports.createDish = async(req,res,next)=>{
    try{
        const {body:{ingridients, dish}} = req
        const newDish = await Dish.create(dish)
        ingridients.forEach(async(ing) => {
            let ingridient = await Ingridient.find({
                name: ing
            })
            if(!ingridient) {
                ingridient = await Ingridient.create({ing})
            }
            console.log(ingridient.ObjectId);
            console.log(newDish.ObjectId);
            // const compound = await Compound.create({ingridientId:ingridient.ObjectId, dishId:newDish.ObjectId})
        });
        res.status(201).send(newDish)
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
module.exports.getAllDishesByIngridient = async(req,res,next)=>{
    try{
        const {params:{ingridientId}}= req
        const dishes= await Compound.find({
            ingridientId: ingridientId
        }).populate('Dish')
        res.status(200).send(dishes)
    } catch(err){
        next(err)
    }
}