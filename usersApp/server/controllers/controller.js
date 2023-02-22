/** @format */

const UserDB = require("../models/model");

//create and save a new user

exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //new user
  const user = new UserDB({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user in the mongoDB database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};

//retrieve and return all users OR retrieve and return a single user

exports.find = (req, res) => {
  req.header;
};

//Update a new identified user by userID

exports.update = (req, res) => {
  req.header;
};

//delete an identified user by userID

exports.delete = (req, res) => {
  req.header;
};
