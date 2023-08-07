const User = require("../models/user");

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Cannot connect to database" });
    });
};

exports.getUser = (req, res, next) => {
  const id = req.params;
  User.findById(id)
    .then((user) => {
      res.status(200).json({ user: user });
    })
    .catch((err) => {
      res.status(400).json({ errorMessage: "User doesn't exist" });
    });
};

exports.updateUser = (req, res, next) => {
  const id = req.params;
  const updatedUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    movieList: req.body.movieList,
  };
  User.findByIdAndUpdate(id, updatedUser)
    .then((result) => {
      res.status(201).json({ message: "User succesfully updated" });
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Update failed" });
    });
};

exports.createUser = (req, res, next) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password, //this will be hashed.
    movieList: [],
  };
  User.create(newUser)
    .then((result) => {
      res.status(201).json({ message: "User succesfully created" });
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Creation failed" });
    });
};

exports.deleteUser = (req, res, next) => {
  const id = req.params;
  User.findByIdAndRemove(id)
    .then((result) => {
      res.status(201).json({ message: "User succesfully deleted" });
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Deletion failed" });
    });
};
