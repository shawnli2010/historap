const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CoordinateSchema = new Schema({
  latitude: Number,
  longitude: Number
});

module.exports = HistoryEvent = mongoose.model("coordinate", CoordinateSchema);
