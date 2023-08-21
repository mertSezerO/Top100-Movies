const express = require("express");
const app = express();

app.use(express.json());

const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(cookieParser());

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
      domain: "http://localhost:3001",
    },
  })
);
require("dotenv").config();

app.use(express.static("controllers/"));
app.use(express.urlencoded({ extended: false }));

const movieRouter = require("./routes/movie");
app.use(movieRouter);

const userRouter = require("./routes/user");
app.use(userRouter);

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("CONNECTED TO MONGODB");
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
