const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
    "mongodb+srv://MongoDB:P18kuu8ZRe3NRmaR@mongodb.hvlvvmz.mongodb.net/devTinder"
);
}

module.exports = connectDB;