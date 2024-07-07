<<<<<<< HEAD
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { jwtPassword } = require("../jwtsecret");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  let decoded;
  try {
    let token = req.headers.authorization;
    let word = token.split(" ");
    decoded = jwt.verify(word[1], jwtPassword);
  } catch (error) {
    console.log("unable to verify");
  }
  if (decoded) {
    req.username = decoded.username;
    next();
  } else {
    res.status(403).json({ msg: "user do not exists" });
  }
}

module.exports = userMiddleware;
=======
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
