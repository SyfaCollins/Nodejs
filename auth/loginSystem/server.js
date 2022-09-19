/** @format */

const express = require("express");
const app = express();
app.use(express.urlencoded({ extender: false }));
// const bcrypt = require("bcrypt");

const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

//userDatabase

const user = [];

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

app.get("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password);
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

// const startApp = () => {

// };

// startApp();
