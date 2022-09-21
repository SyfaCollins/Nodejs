/** @format */

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config;
}

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
require;
const flash = require("express-flash");
const session = require("express-session");

app.use;

const initializePassport = require("./passport-config");
initializePassport(passport, (email) => {
  user.find((user) => user.email === email);
});

const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

//userDatabase

const user = [];

//middleWare
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
  })
);

//home route
app.get("/", (req, res) => {
  res.render("index", { title: "Login System" });
  res.send("page loaded successful");
});

app.get("/login", (req, res) => {
  console.log(req.method);
  res.render("login", { title: "Login System" });
  res.send("page loaded successful");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // const hashedPassword = req.body.password;

    user.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    //after creating the data redirect users to the login page

    res.redirect("/login");
  } catch (error) {
    res.redirect("/register");
  }
  console.log(user);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
