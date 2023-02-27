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
  if (req.query.id) {
    const id = req.query.id;

    UserDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `No such user with id${id}` });
        } else {
          res.send(data);
        }
      })
      .catch((err) =>
        res.status(500).send({ message: `Err retrieving user with id${id}` })
      );
  } else {
    UserDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error while trying to retrieve users",
        });
      });
  }
};

//Update a new identified user by userID

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;

  UserDB.findByIdAndUpdate(id, req.body, { userFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with id ${id}. Maybe user not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update user information" });
    });
};

//delete an identified user by userID

exports.delete = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;

  UserDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with id ${id}. Maybe user not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Could not delete User with id=" + id });
    });
};
