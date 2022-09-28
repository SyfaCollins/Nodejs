/** @format */

const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
} = require("../controllers/productsMethods");

router.route("/").get(getAllProducts);

router.route("/products").get(getSingleProduct);

module.exports = router;
