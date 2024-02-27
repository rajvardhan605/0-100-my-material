const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const {jwtPassword} = require("../jwtsecret");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  let username = req.body.username;
  let password = req.body.password;
  const existingUser = await Admin.findOne({ username: username });
  if (existingUser) {
    res.json({ msg: "admin already exists" });
  } else {
    await Admin.create({ username: username, password: password });
    res.json({ msg: "admin created successfully" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await Admin.findOne({
    username: username,
    password: password,
  });
  if (existingUser) {
    var token = jwt.sign({ username: username }, jwtPassword);
    res.json({
      msg: "signed in succesfully",
      token,
    });
  } else {
    res.json({
      msg: "wrong username or password",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  let title = req.body.title;
  let description = req.body.description;
  let price = req.body.price;
  let imagelink = req.body.imagelink;
  const newCourse = await Course.create({
    title: title,
    description: description,
    price: price,
    imagelink: imagelink,
  });
  res.json({ msg: `course added succesfully with course id ${newCourse._id}` });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  let data = await Course.find({});
  res.json({ courses: data });
});

module.exports = router;
