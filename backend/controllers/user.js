const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      return res.status(200).json({ users: users });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ errorMessage: "Cannot connect to database" });
    });
};

exports.getUser = (req, res, next) => {
  const id = req.params;
  User.findById(id)
    .then((user) => {
      return res.status(200).json({ user: user });
    })
    .catch((err) => {
      return res.status(400).json({ errorMessage: "User doesn't exist" });
    });
};

exports.getUserMovieList = (req, res, next) => {
  const token = req.body.token;
  const decodedToken = jwt_decode(token);
  User.findById(decodedToken.id)
    .then((user) => {
      return res.status(200).json({ movieList: user.movieList });
    })
    .catch((err) => {
      return res.status(400).json({ errorMessage: "User doesn't exist" });
    });
};

exports.updateUser = async (req, res, next) => {
  const token = req.cookies.token;
  const decodedToken = jwt_decode(token);
  User.findByIdAndUpdate(decodedToken.id, req.body)
    .then((result) => {
      return res.status(201).json({
        message: "User succesfully updated",
      });
    })
    .catch((err) => {
      return res.status(500).json({ errorMessage: "Update failed" });
    });
};

exports.createUser = (req, res, next) => {
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    movieList: [],
  };
  User.create(newUser)
    .then((result) => {
      return res.status(201).json({ message: "User succesfully created" });
    })
    .catch((err) => {
      return res.status(500).json({ errorMessage: "Creation failed" });
    });
};

exports.deleteUser = (req, res, next) => {
  const id = req.params;
  User.findByIdAndRemove(id)
    .then((result) => {
      return res.status(201).json({ message: "User succesfully deleted" });
    })
    .catch((err) => {
      return res.status(500).json({ errorMessage: "Deletion failed" });
    });
};

createToken = (user) => {
  const jwtSecret = process.env.SECRET;
  const jwtData = {
    email: user.email,
    id: user._id,
  };
  return jwt.sign(jwtData, jwtSecret, { expiresIn: "30m" });
};

exports.loginUser = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ errorMessage: "Internal server error" });
        }

        if (!result) {
          return res
            .status(400)
            .json({ errorMessage: "Invalid email and password" });
        } else {
          req.session.save((err) => {
            if (err) {
              return res
                .status(500)
                .json({ errorMessage: "Session save error" });
            }
            const token = createToken(user);
            if (!token) {
              return res
                .status(500)
                .json({ errorMessage: "Internal server error" });
            }
            return res.status(200).json({
              token: token,
              movieList: user.movieList,
            });
          });
        }
      });
    })
    .catch((err) => {
      return res.status(400).json({ errorMessage: "User doesn't exist" });
    });
};
