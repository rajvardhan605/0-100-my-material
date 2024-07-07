const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
<<<<<<< HEAD
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  let username = req.body.username;
  let password = req.body.password;
  const existingUser = await User.findOne({ username: username });
  if (existingUser) {
    res.json({ msg: "user already exists" });
  } else {
    await User.create({ username: username, password: password });
    res.json({ msg: "user created successfully" });
  }
});

router.get("/courses", async(req, res) => {
  // Implement listing all courses logic
  let data = await Course.find({});
  res.json({ courses: data });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      "$push": {
        purchasedCourses: courseId,
      }
    }
  );
  res.json({
    message: "Purchase complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });

  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
=======

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
>>>>>>> b0505ddb8c974d7e5be8d00357ace472cbf5475f
