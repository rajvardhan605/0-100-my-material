const express = require("express");
const cors = require("cors");
const { User } = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

let currentUser = "raj";

app.get("/read", async (req, res) => {
  const data = await User.findOne({
    username: currentUser,
  });
  res.json({ data });
});

app.post("/write", async (req, res) => {
  const info = req.body;
  await User.create({
    username: info.username,
    about: info.about,
    interests: info.interests,
    linkedin: info.linkedin,
    twitter: info.twitter,
  });
  currentUser = info.username;
  res.json({
    msg: "user added succesfully",
  });
});

app.listen(3000, () => {
  console.log(`Server started on 3000`);
});
