const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
      return res.status(201).json({ message: "User succesfully updated" });
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

createToken = (req) => {
  const jwtSecret = process.env.SECRET;
  const jwtData = {
    email: req.body.email,
    username: req.body.username,
  };
  return jwt.sign(jwtData, jwtSecret, { expiresIn: "30m" });
};

exports.loginUser = (req, res, next) => {
  const token = createToken(req);
  if (!token) {
    return res.status(500).json({ errorMessage: "Internal server error" });
  }

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
          // Doğru kullanım: Önce session kaydedilir, ardından cevap döndürülür.
          req.session.save((err) => {
            if (err) {
              return res
                .status(500)
                .json({ errorMessage: "Session save error" });
            }
            return res.status(201).json({ token: token });
          });
        }
      });
    })
    .catch((err) => {
      return res.status(400).json({ errorMessage: "User doesn't exist" });
    });
};
