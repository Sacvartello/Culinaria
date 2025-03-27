const mongoose = require('mongoose');
const User = require('./userModel');
const Dish = require('./dishModel')
const Ingridient = require('./ingridientModel')
const db = require('../configs/mConfig.json');

const CONFIG = db[process.env.NODE_ENV || "development"];

const url = `mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`

mongoose.connect(url)
.catch((err) => {
    console.log('connection failed');
    process.exit(1);
})

module.exports = {
    User, Dish, Ingridient
}