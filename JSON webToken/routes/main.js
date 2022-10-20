/** @format */
const express = require("express");
const router = express.Router();

// const { login, dashboard } = require("../controllers/main");

// router.route("/dashboard").get(dashboard);
// router.route("/login").post(login);

function login(req, res) {
  res.send("Dashboard");
}

// router.route("/dashboard").get();

router.route("/login").get(login);

module.exports = router;
