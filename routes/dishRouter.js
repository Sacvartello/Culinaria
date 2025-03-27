const express = require('express')
const dishRouter = express.Router()
const {createDish,getOneDish,getAllDishes,updateDish,deleteDish, getAllDishesByIngridient} = require('../controllers/dishController')

dishRouter.post('/', createDish)
dishRouter.get('/:dishId', getOneDish)
dishRouter.get('/', getAllDishes)
dishRouter.put('/:dishId', updateDish)
dishRouter.delete('/:dishId', deleteDish)

dishRouter.get('/ingridient/:ingridientId', getAllDishesByIngridient)

module.exports = dishRouter