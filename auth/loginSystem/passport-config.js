/** @format */

const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const initialize = async (passport, getUserByEmail) => {
  //call back function for verifying access
  const authenticateUser = (email, password, done) => {
    const user = getUserByEmail(email);
  };

  //checking if email exists
  if (user == null) {
    return done(null, false, { message: "No user with that email." });
  }

  //comparing passwords
  try {
    if (await bcrypt.compare(password, user.password)) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Incorrect user" });
    }
  } catch (e) {
    return done(e);
  }

  passport.use(new LocalStrategy({ usernameField: "email" }), authenticateUser);

  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
};

module.exports = initialize;
