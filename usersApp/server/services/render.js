/** @format */

const axios = require("axios");
const { response } = require("express");

exports.homeRoute = (req, res) => {
  axios
    .get("http://localhost:8080/api/users")
    .then(function (response) {
      console.log(response.data);
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.addUser = (req, res) => {
  res.render("add_user");
};

exports.updateUser = (req, res) => {
  res.render("update_user");
};
