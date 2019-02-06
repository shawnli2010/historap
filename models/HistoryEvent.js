const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HistoryEventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
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
    time: String
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
