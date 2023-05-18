const mongoose = require("mongoose");

//Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    type: String,
    default: "default.jpg",
  },
});

//Create the User model
const User = mongoose.model("User", userSchema);
//Export the User model
module.exports = User;
