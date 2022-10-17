/** @format */

const Product = require("../models/productModel");

/*
This products controller holds all methods we want to
apply to our request and response
*/

const getAllProductsStatic = async (req, res) => {

  const search = 'a'
  const products = await Product.find({ name: {$regex:search, $options:'i'} });


  res.status(200).json({ products, nbHits: products.length });
  // throw new Error("This is testing the async error");
};

const getAllProducts = async (req, res) => {
  const { featured ,company, name} = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false; 
  }

  if (company) {
    queryObject.company = company;
  }

  if(name) {
    queryObject.name = name
  }

  // if(sort){

  // }

  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
