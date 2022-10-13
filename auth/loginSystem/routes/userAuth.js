/** @format */

const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  registerHome,
  loginUser,
  register,
} = require("../controller/userMethods");

const { registerUser } = require("../controller/registerUser");

router.route("/").get(registerHome);
router.route("/login").get(loginUser);
// router.route("/login").post(
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
// );

router.route("/register").get(register);
// router.route("/register").post(registerUser);

module.exports = router;
