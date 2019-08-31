const moongose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require("express-validator");
const bcrypt = require("bcrypt");
const config = require("config");

const contactSchema = new moongose.Schema({
  user: {
    type: moongose.Schema.Types.ObjectId,
    required: true,
    ref: "users"
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: "personal"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = moongose.model("contact", contactSchema);
