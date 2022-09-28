/** @format */

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const registerHome = (req, res) => {
  res.render("index");
};

const login = (req, res) => {
  console.log(req.method);
  res.render("login", { title: "Login System" });
  res.send("page loaded successful");
};

const register = (req, res) => {
  res.render("register.ejs");
};

const registerUser = (req, res) => {
    res.render("register.ejs");
  };

module.exports = { registerHome, login, register };
