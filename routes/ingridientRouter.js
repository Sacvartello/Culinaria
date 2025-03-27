const express = require("express");
const ingridientRouter = express.Router();
const {
  createIngridient,
  getOneIngridient,
  getAllIngridients,
  updateIngridient,
  deleteIngridient,
} = require("../controllers/ingridientController");

ingridientRouter.post("/", createIngridient);
ingridientRouter.get("/:ingridientId", getOneIngridient);
ingridientRouter.get("/", getAllIngridients);
ingridientRouter.put("/:ingridientId", updateIngridient);
ingridientRouter.delete("/:ingridientId", deleteIngridient);

module.exports = ingridientRouter;
