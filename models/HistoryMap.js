const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const HistoryMapSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  areaName: {
    type: String
  },
  historyEvents: [
    {
      type: ObjectId,
      ref: "HistoryEvent"
    }
  ]
});

module.exports = HistoryMap = mongoose.model(
  "HistoryMap",
  HistoryMapSchema,
  "historyMaps"
);
