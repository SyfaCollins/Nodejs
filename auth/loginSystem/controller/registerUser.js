/** @format */
const express = require("express");
const app = express();

const bcrypt = require("bcrypt");


const users = [];

const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    //after creating the data redirect users to the login page
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.redirect("/register");
  }
  console.log(users);
};

module.exports = { registerUser };
