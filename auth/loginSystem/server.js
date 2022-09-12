/** @format */

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.set("View engine", "ejs");

//home route
app.get("/", (req, res) => {
  res.render("base", { title: "Login System" });
});

const startApp = () => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

startApp();