/** @format */

const express = require("express");
const router = express.Router();
const { registerHome, login, register } = require("../controller/userMethods");

const { registerUser } = require("../controller/registerUser");

router.route("/").get(registerHome);
router.route("/login").get(login);
router.route("/register").get(register);
router.route("/register").post(registerUser);

module.exports = router;
