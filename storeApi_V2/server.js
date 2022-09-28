/** @format */

const express = require("express");
const app = express();
const router = require("./routes/products");

//routes
app.use(router)

//PORT

const port = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(port, console.log(`running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
