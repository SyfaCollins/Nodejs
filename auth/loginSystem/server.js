/** @format */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

//home route
app.get("/", (req, res) => {
  res.render("index", { title: "Login System" });
  // res.send("Hello world");
});

app.get("/things", (req, res) => {
  console.log(req.method)
  // res.render("base", { title: "Login System" });
  // res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// const startApp = () => {

// };

// startApp();
