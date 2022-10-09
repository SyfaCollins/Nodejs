/** @format */

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
require;
const userAuth = require("./routes/userAuth");
const flash = require("express-flash");
const session = require("express-session");
const passport = require('passport')

// app.use;

const initializePassport = require("./passport-config");
initializePassport(passport, (email) => {
  user.find((user) => user.email === email);
});

const port = process.env.PORT || 3600;
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

//userDatabase

const user = [];

//middleWare
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
  })
);

app.use(passport.initialize())
app.use(passport.session())


//home route

app.use(userAuth);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
