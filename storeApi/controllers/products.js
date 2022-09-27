/** @format */

const Product = require("../models/productModel");

/*
This products controller holds all methods we want to
apply to our request and response
*/

const getAllProducts = async (req, res) => {
  const products = await Product.findOne({name:"accent chair"});
  res.status(200).json({products, nbHits: products.length});
  // throw new Error("This is testing the async error");
};

const getAllProductsStatic = async (req, res) => {
  console.log(req.query);
  res.status(200).json({ message: "products route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
