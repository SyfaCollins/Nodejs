/** @format */

//this holds the configurations of our database 

const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect('mongodb+srv://syfaCollins:zeddtedy@cluster0.i5dsajr.mongodb.net/STOREAPI?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
