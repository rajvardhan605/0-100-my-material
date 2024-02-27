const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const {jwtPassword} = require("../jwtsecret");
const { User, Course } = require("../db");

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

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await User.findOne({
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

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  let data = await Course.find({});
  res.json({ courses: data });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  username = req.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
    message: "Purchase complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });
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
