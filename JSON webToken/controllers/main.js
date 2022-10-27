/** @format */

const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res
    .status(200)
    .json({ msg: `You can Access you private content ${luckyNumber}` });
};

const login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "User created", token });

  console.log(username, password);
  res.send("logged In");
  next();
};

module.exports = { dashboard, login };
