const {Dish, Compound, Ingridient} = require('../models')
module.exports.createDish = async(req,res,next)=>{
    try{
        const {body:{ingridients, dish}} = req
        const newDish = await Dish.create(dish)
        ingridients.forEach(async(ing) => {
            console.log('ing:',ing);
            let ingridient = await Ingridient.find({
                name: ing
            })
            if(!ingridient[0]) {
                ingridient =[await Ingridient.create({name:ing})]
            }
            console.log('ingridient:',ingridient);
            const compound = await Compound.create({ingridientId:ingridient[0]._id, dishId:newDish._id})
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