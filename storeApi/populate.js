/** @format */

require("dotenv").config;

const connectDB = require("./db/connect");
const productModel = require("./models/productModel");
const jsonProducts = require("./productsData.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await productModel.deleteMany();
    await productModel.create(jsonProducts);
    console.log("Connected successful!!!");
  } catch (error) {
    console.log(error);
  }
};

start();
