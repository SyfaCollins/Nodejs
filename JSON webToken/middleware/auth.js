/** @format */

authenticationMiddleWare = async (req, res, next) => {
  console.log(req.header.authentication);
  next();
};

module.exports = authenticationMiddleWare;
