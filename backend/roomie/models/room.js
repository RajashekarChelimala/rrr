const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  room_type: { type: String, require: true },
  building_type: { type: String, require: true },
  utilities_included: Boolean,
  pets_allowed: Boolean,
  rent: Number,
  address: { type: String, trim: true },
  description: String,
  first_date_available: Date,
  email: { type: String, required: true },
  phone: { type: Number, minlength: 10, required: true },
  images: [String],
});

module.exports = mongoose.model("Room", roomSchema);
