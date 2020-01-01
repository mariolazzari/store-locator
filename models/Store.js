const mongoose = require("mongoose");

// Store schema
const StoreSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: [true, "Store id field is mandatory."],
    unique: true,
    trim: true,
    maxlength: [10, "Store id must be less than 10 chars."]
  }
});
