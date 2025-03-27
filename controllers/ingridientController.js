const{Ingridient} = require('../models')
module.exports.createIngridient = async(req,res,next)=>{
    try{
        const {body} = req
        const ingridient = await Ingridient.create(body)
        res.status(201).send(ingridient)
    } catch(err){
        next(err)
    }
}
module.exports.getOneIngridient = async(req,res,next)=>{
    try{
        const {params:{ingridientId}} = req
        const ingridient = await Ingridient.findById(ingridientId)
        res.status(200).send(ingridient)
    } catch(err){
        next(err)
    }
}
module.exports.getAllIngridients = async(req,res,next)=>{
    try{
        const ingridient = await Ingridient.find({})
        res.status(200).send(ingridient)
    } catch(err){
        next(err)
    }
}
module.exports.updateIngridient = async(req,res,next)=>{
    try{
        const {body, params:{ingridientId}} = req
        const ingridient = await Ingridient.findByIdAndUpdate(ingridientId,body)
        res.status(200).send(ingridient)
    } catch(err){
        next(err)
    }
}
module.exports.deleteIngridient = async(req,res,next)=>{
    try{
        const {params:{ingridientId}} = req
        const ingridient = await Ingridient.findByIdAndDelete(ingridientId)
        res.status(200).send(ingridient)
    } catch(err){
        next(err)
    }
}