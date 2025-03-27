const{User} = require('../models')
module.exports.createUser = async(req,res,next)=>{
    try{
        const {body} = req
        const user = await User.create(body)
        res.status(201).send(user)
    } catch(err){
        next(err)
    }
}
module.exports.getOneUser = async(req,res,next)=>{
    try{
        const {body, params:{userId}} = req
        const user = await User.findById(userId)
        res.status(200).send(user)
    } catch(err){
        next(err)
    }
}
module.exports.getAllUsers = async(req,res,next)=>{
    try{
        const user = await User.find({})
        res.status(200).send(user)
    } catch(err){
        next(err)
    }
}
module.exports.updateUser = async(req,res,next)=>{
    try{
        const {body, params:{userId}} = req
        const user = await User.findByIdAndUpdate(userId,body)
        res.status(200).send(user)
    } catch(err){
        next(err)
    }
}
module.exports.deleteUser = async(req,res,next)=>{
    try{
        const {body, params:{userId}} = req
        const user = await User.findByIdAndDelete(userId,body)
        res.status(200).send(user)
    } catch(err){
        next(err)
    }
}