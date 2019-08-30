const express = require("express");

const router = new express.Router();

// @route   GET api/auth
// @desc    Get a user
// @access  Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route   POST api/users
// @desc    Auth user and Get token
// @access  Public
router.post("/", (req, res) => {
  res.send("Login user");
});

module.exports = router;


module.exports = router;
