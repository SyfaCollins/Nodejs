/** @format */

const Product = require("../models/productModel");

/*
This products controller holds all methods we want to
apply to our request and response
*/

const getAllProductsStatic = async (req, res) => {
  throw new Error("This is testing the async error");
  const products = await Product.find({name: 'vase table'});
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "products route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
