<<<<<<< HEAD
const { User } = require("../db");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  let username = req.headers.username;
  let password = req.headers.password;
  const existingUser = await User.findOne({
    username: username,
    password: password,
  });
  if (existingUser) {
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
