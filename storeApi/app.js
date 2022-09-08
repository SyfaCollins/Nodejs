/** @format */

require("dotenv").config;

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

//middleware

//PORT
const port = 5000;

app.get('/store/api/products', (req,res) => {
  res.send(`<h1>Product Store</h1>`)
})

app.listen(port, async () => {
  try {
    // await connectDB(process.env.MONGO_URI),
      console.log("connected to database"),
      app.get(port, (req,res) => res.json({msg:'Hello world'}));
  } catch (error) {
    console.log(error);
  }
  //   process.env.MONGO_URI, console.log("connected to database");
});
