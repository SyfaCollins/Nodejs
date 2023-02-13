/** @format */

const express = require("express");
const app = express();
const router = require("./routes/products");

//-------------------ROUTES--------------------------
app.use(router)


//-------------------SERVER--------------------------

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
