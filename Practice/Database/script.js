const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://rajvardhan605:R04v07s03%40@cluster0.qntdaki.mongodb.net/MyFirsrDatabase"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/", async function (req, res) {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(403).json({ msg: "user already exists" });
  } else {
    const user = new User({
      name: username,
      email: email,
      password: password,
    });
    user.save();
    res.json({ msg: "data added sucesfully" });
  }
});

app.listen(3000);
