/** @format */

const express = require("express");
const router = express.Router();

/**
 * These routes help to attach a specific path to
 * a specific function inside the controller
 */

const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/products");

router.route("/products")
.get(getAllProducts);


router.route("/products/test")
.get(getAllProductsStatic);

module.exports = router;