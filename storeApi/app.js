/** @format */

require("dotenv").config;

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

//middleware
app.use(express().json);

const errorHandlerMiddleware = require("./middleWare/errorHandlerMiddleware");
const notFoundMiddleWare = require("./middleWare/notFoundMiddleWare");

//PORT
const port = process.env.PORT || 5000;

//Routes
app.get("/store/api/products", (req, res) => {
  res.send(
    `<h1>Product Store</h1><a href="/api/v1/products"> view all products</a>`
  );
});

app.get("/api/v1/products", (req, res) => {
  res.send(`<h1>Home Products page</h1>`);
});

app.use("/api/v1/products");
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const startApp = () => {
  app.listen(port, async () => {
    try {
      return (
        // await connectDB(process.env.MONGO_URI),
        console.log(`connected to database and listening at port ${port}`),
        app.get(port, (req, res) =>
          res.status(200).json({ msg: "Hello world" })
        )
      );
    } catch (error) {
      console.log(error);
    }
  });
};

startApp();
