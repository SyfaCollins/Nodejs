/** @format */

/*
This products controller holds all methods we want to
apply to our request and response
*/

const getAllProductsStatic = async (req, res) => {
  throw new Error('This is testing the async error')
  res.status(200).json({ message: "products testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "products route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
