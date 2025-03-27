const express = require('express')
const dishRouter = express.Router()
const {createDish,getOneDish,getAllDishes,updateDish,deleteDish} = require('../controllers/dishController')

dishRouter.post('/', createDish)
dishRouter.get('/:dishId', getOneDish)
dishRouter.get('/', getAllDishes)
dishRouter.put('/:dishId', updateDish)
dishRouter.delete('/:dishId', deleteDish)

module.exports = dishRouter