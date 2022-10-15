/** @format */

const Product = require("../models/productModel");

/*
This products controller holds all methods we want to
apply to our request and response
*/

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ products, nbHits: products.length });
  // throw new Error("This is testing the async error");
};

const getAllProducts = async (req, res) => {
  const { featured ,company} = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false; 
  }

  if (company) {
    queryObject.company = company === company;
  }

  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
