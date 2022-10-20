/** @format */

const Product = require("../models/productModel");

/*
This products controller holds all methods we want to
apply to our request and response
*/

//-------------------------TEST-----------------------------

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gt: 20 } })
    .select("name price")
    .sort("price");

  res.status(200).json({ products, nbHits: products.length });
  // throw new Error("This is testing the async error");
};

//-----------------------all products route--------------------

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, numericFilters } = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let result = Product.find(queryObject);

  if (sort) {
    // console.log(sort);
    const sortList = sort.split(",").join("");
    result = result.sort(sortList);
  } else {
    result = result.sort("CreatedAt");
  }

  //## NumericFilters
  //this is incomplete

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };

    const regEx = /\b(<|>|>=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    console.log(filters);
  }

  // console.log(queryObject);
  // console.log(queryObject);

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
