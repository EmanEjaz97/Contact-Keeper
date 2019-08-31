const moongose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require("express-validator");
const bcrypt = require("bcrypt");
const config= require('config')

const userSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

// userSchema.methods.generateAuthToken = async function(next) {
//   const user = this;
//   const token = jwt.sign({id: user._id}, config.get('jwtSecret'))
//   return token
// };

module.exports = moongose.model("user", userSchema);
