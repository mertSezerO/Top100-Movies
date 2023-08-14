const express = require("express");
const app = express();

app.use(express.json());

const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Bu örnekte http üzerinde çalıştığı için secure'ı false yapabilirsiniz, gerçek projelerde https kullanmanız önerilir.
  })
);
require("dotenv").config();

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);

app.use(express.static("controllers/"));
app.use(express.urlencoded({ extended: false }));

const movieRouter = require("./routes/movie");
app.use(movieRouter);

const userRouter = require("./routes/user");
app.use(userRouter);

//const userRouter = require("./routes/user")
//app.use(userRouter);

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
