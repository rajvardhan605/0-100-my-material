const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://rajvardhan605:R04v07s03%40@cluster0.qntdaki.mongodb.net/Business-Card"
);

const userSchema = new mongoose.Schema({
  username: String,
  about: String,
  interests: [String],
  linkedin: String,
  twitter: String,
});

const User = mongoose.model("user",userSchema);

module.exports = {
  User
}
