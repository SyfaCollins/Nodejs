/** @format */

const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "All Products" });
};

const getSingleProduct = (req, res) => {
  res.status(200).json({ msg: "Single Product" });
};

module.exports = {
  getAllProducts,
  getSingleProduct,
};
