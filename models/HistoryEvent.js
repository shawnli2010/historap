const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HistoryEventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  coordinate: {
    // The center or the rough center of where the event happened
    type: Schema.Types.ObjectId,
    ref: "coordinate",
    required: true
  },
  coordinates: [
    {
      latitude: Number,
      longitude: Number
    }
  ],
  locationName: {
    type: String
  },
  period: {
    name: String,
    year: Number,
    month: Number,
    date: Number,
    time: Number
  },
  description: {
    type: String
  },
  imgUrl: {
    type: String
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = HistoryEvent = mongoose.model(
  "historyEvent",
  HistoryEventSchema
);
