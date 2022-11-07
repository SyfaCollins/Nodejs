/** @format */

const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");



//---------------------------------DASHBOARD----------------------------------------------------------

const dashboard = async (req, res) => {

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 400);
  }

  const token = authHeader.split(' ')[1]

  console.log(token);
  
  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    // console.log(decoded);
    console.log(req.headers);
    const luckyNumber = Math.floor(Math.random() * 100);
    res
      .status(200)
      .json({
        msg: `Hello ${decoded.username}  ${luckyNumber}`,
        secret: `Your Auth number is ${luckyNumber}`,
      });
  } catch (error) {
    throw new CustomAPIError("Access Denied!", 401);
    
  }


};

//-------------------------------LOGIN--------------------------------------------------------------

const login = (req, res, next) => {
  //we assign out variables to the
  const { username, password } = req.body;

  //if statement tto catch errors
  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }
  //create id from mongoose
  const id = new Date().getDate();

  //created token variable that signs  a user a token

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  //send back response of the token
  res.status(200).json({ msg: "User created", token });

  console.log(username, password);
  res.send("logged In");
  next();
};

module.exports = { dashboard, login };
