const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = new express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Pls add name")
      .not()
      .isEmpty(),
    check("email", "Pls include a valid email!").isEmail(),
    check(
      "password",
      "Pls enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    // const user = new User(res.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).send("User already exits");
      }

      user = new User(req.body);
      // const token = await user.generateAuthToken();

      await user.save();
      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token: token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error);
    }
  }
);

module.exports = router;
