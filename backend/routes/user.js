const Router = require("express").Router();

const userController = require("../controllers/user");

Router.get("/users", userController.getUsers);

module.exports = Router;
