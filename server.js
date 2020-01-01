const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// load enviroment vars
dotenv.config({ path: "./config/config.env" });
const { PORT, NODE_ENV, MONGO_URI } = process.env;

// mongo connection
connectDB(MONGO_URI);

// express server
const app = express();
// middlewares
app.use(express.json());
app.use(cors());
// routes
app.use("/api/v1/stores", require("./routes/stores"));

// start server
app.listen(5000, () =>
  console.log(`Server started on port ${PORT} in ${NODE_ENV} mode.`)
);
