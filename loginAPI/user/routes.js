const { Router } = require("express");
const { addUser, login, updateUser, deleteUser, addFavourites } = require("./controller");
const { hashPass, unHash, decrypt } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/login",  unHash, login);
userRouter.get("/login", decrypt, login);
userRouter.patch("/update",  hashPass, updateUser);
userRouter.delete("/delete",  deleteUser);
userRouter.put("/favourites", addFavourites)


module.exports = userRouter;