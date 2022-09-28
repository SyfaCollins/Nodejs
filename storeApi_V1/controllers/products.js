/** @format */

const Product = require("../models/productModel");

/*
This products controller holds all methods we want to
apply to our request and response
*/

const getAllProductsStatic = async (req, res) => {
  const products = await Product.findOne({name:"accent chair"});
  res.status(200).json({products, nbHits: products.length});
  // throw new Error("This is testing the async error");
};

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  // console.log(req.query);
  res.status(200).json({products, nbHits: products.length});
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
