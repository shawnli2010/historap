const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load HistoryEvent Model
const HistoryEvent = require("../../models/HistoryEvent");
const Coordinate = require("../../models/Coordinate");

//@route    GET api/historyEvent/test
//@desc     Test profile route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "HistoryEvent Works" }));

//@route    POST api/historyEvent/test
//@desc     Test database connection
//@access   Public
router.post("/test", (req, res) => {
  const testCoordinate = new Coordinate({
    latitude: 20,
    longitude: 30
  });

  const testEvent = new HistoryEvent({
    name: "huang jin qi yi",
    coordinate: testCoordinate,
    description: "this is a test history event",
    unRelatedField: 100
  });

  testCoordinate
    .save()
    .then(coordinate => {
      testEvent
        .save()
        .then(event => res.json(event))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = router;
