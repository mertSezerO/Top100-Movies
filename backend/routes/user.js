const Router = require("express").Router();

const authController = require("../controllers/auth");
const userController = require("../controllers/user");

Router.get("/users", userController.getUsers);

Router.post("/login", userController.loginUser);

Router.post("/users", userController.createUser);

Router.patch("/users", authController.decodeToken, userController.updateUser);

Router.post(
  "/users/list",
  authController.decodeToken,
  userController.getUserMovieList
);

module.exports = Router;
