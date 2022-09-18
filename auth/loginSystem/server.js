/** @format */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

//home route
app.get("/", (req, res) => {
  res.render("index", { title: "Login System" });
  res.send("page loaded successful");
});

app.get("/login", (req, res) => {
  console.log(req.method)
  res.render("login", { title: "Login System" });
  res.send("page loaded successful");
});

app.get("/register", (req, res) => {
  console.log(req.method)
  res.render("register", { title: "Login System" });
  res.send("page loaded successful");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// const startApp = () => {

// };

// startApp();
