const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  getOneUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

userRouter.post("/", createUser);
userRouter.get("/:userId", getOneUser);
userRouter.get("/", getAllUsers);
userRouter.put("/:userId", updateUser);
userRouter.delete("/:userId", deleteUser);

module.exports = userRouter;
