/** @format */
require("dotenv").config;
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/productsRoutes");

const errorHandlerMiddleware = require("./middleWare/error-handler");
const notFoundMiddleWare = require("./middleWare/not-found");
const { route } = require("./routes/productsRoutes");

//middleware
app.use(express.json());

//PORT
const port = process.env.PORT || 5000;

// routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products/test">products route</a>');
});

// products route

app.use("/api/v1", productsRouter);
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const startApp = () => {
  app.listen(port, async () => {
    try {
      return (
        await connectDB(process.env.MONGO_URI),
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
