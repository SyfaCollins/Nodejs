/** @format */

const express = require("express");
const passport = require("passport");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const registerHome = (req, res) => {
  res.render("index");
};

const login = passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect:'/login',
  failureFlash:true
})

const register = (req, res) => {
  res.render("register.ejs");
};

const registerUser = (req, res) => {
    res.render("register.ejs");
  };

module.exports = { registerHome, login, register };
