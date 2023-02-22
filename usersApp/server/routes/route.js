/** @format */

const express = require("express");
const route = express.Router();
const controller = require("../controllers/controller");

// import routes

const services = require("../services/render");

route.get("/", services.homeRoute);

route.get("/add_user", services.addUser);

route.get("/update_user", services.updateUser);

//API requests

route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
