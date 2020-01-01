const mongoose = require("mongoose");

// connection options
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true
};

const connectDB = async uri => {
  try {
    const conn = await mongoose.connect(uri, options);
    console.log(`MongoDB connected to ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
