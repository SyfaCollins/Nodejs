/** @format */

const CustomAPIError = require("./custom-error");

class unauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401
  }
}

module.exports = unauthenticatedError;