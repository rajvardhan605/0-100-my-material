<<<<<<< HEAD
const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

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
    imagelink: imagelink
  });
  res.json({ msg: `course added succesfully with course id ${newCourse._id}` });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  let data = await Course.find({});
  res.json({ courses: data });
});

module.exports = router;
=======
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
