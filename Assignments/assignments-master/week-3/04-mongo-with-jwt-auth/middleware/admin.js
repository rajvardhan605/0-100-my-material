<<<<<<< HEAD
const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
const {jwtPassword} = require("../jwtsecret");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  let decoded;
  try{
    let token = req.headers.authorization;
    let word = token.split(" ");
    decoded = jwt.verify(word[1],jwtPassword);
  }
  catch(error){
    console.log("unable to verify");
  }
  if (decoded) {
    next();
  } else {
    res.status(403).json({ msg: "admin do not exists" });
  }
=======
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
}

module.exports = adminMiddleware;