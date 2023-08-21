const jwt_decode = require("jwt-decode");

exports.decodeToken = (req, res, next) => {
  const token = req.get("authorization").split(" ")[1];
  try {
    const decodedToken = jwt_decode(token);
    req.body.token = decodedToken;
    next();
  } catch (err) {
    console.log("Token is invalid.");
  }
};
