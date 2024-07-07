<<<<<<< HEAD
const { Admin } = require("../db");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  let username = req.headers.username;
  let password = req.headers.password;
  const existingUser = await Admin.findOne({
    username: username,
    password: password,
  });
  if (existingUser) {
    next();
  } else {
    res.status(403).json({ msg: "admin do not exists" });
  }
}

module.exports = adminMiddleware;
=======
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
