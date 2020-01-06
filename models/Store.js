const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

// Store schema
const StoreSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: [true, "Store id field is mandatory."],
    unique: true,
    trim: true,
    maxlength: [10, "Store id must be less than 10 chars."]
  },
  address: {
    type: String,
    required: [true, "Address is mandatory."]
  },
  location: {
    type: {
      type: String,
      enum: ["Point"]
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    },
    formattedAddress: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// geocoder create location
StoreSchema.pre("save", async function(next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };
  // do not save address
  this.address = undefined;
  next();
});

module.exports = mongoose.model("Store", StoreSchema);
