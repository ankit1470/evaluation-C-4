const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://ankit1470:ankit1470@cluster0.iyngi.mongodb.net/todo?retryWrites=true&w=majority"
  );
};
