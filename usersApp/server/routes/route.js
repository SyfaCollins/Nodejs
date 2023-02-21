/** @format */

const express = require("express");
const route = express.Router();

// import routes

const services = require("../services/render");

route.get("/", services.homeRoute);

route.get("/add_user",services.addUser);

route.get("/update_user",services.updateUser);

module.exports = route;
