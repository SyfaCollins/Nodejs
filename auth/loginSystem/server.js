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
const passport = require("passport");
// const {registerUser} = require("./controller/registerUser")


const users = [];

app.post('/register', async (req, res) => {
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
});

const initializePassport = require("./passport-config");
initializePassport(passport, (email) =>
  users.find((user) => user.email === email)
);

//userDatabase

// const user = [];

const port = process.env.PORT || 3600;

//middleWare
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize()); //this is inside the passport
app.use(passport.session());

//home route
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);
app.use(userAuth);``

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
