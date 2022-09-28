/** @format */

const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductsSchema);
