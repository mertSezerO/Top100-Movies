const Router = require("express").Router();

const userController = require("../controllers/user");

Router.get("/users", userController.getUsers);

Router.post("/login", userController.loginUser);

Router.post("/users", userController.createUser);

module.exports = Router;
