const express = require("express");
const rootRouter = express.Router();
const userRouter = require("./userRouter");
const dishRouter = require("./dishRouter");
const ingridientRouter = require("./ingridientRouter");

rootRouter.use("/dish", dishRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/ingridient", ingridientRouter);

module.exports = rootRouter;
