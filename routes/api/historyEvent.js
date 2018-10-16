const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load HistoryEvent Model
const HistoryEvent = require("../../models/HistoryEvent");

//@route    GET api/historyEvent/test
//@desc     Test profile route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "HistoryEvent Works" }));

//@route    GET api/historyEvent/:id
//@desc     Get historyEvent by id
//@access   Private
router.get("/:id", (req, res) => {
  HistoryEvent.findById(req.params.id)
    .then(historyEvent => {
      res.json(historyEvent);
    })
    .catch(err =>
      res
        .status(404)
        .json({ noHistoryEventFound: "No historyEvent found with this id" })
    );
});

//@route    POST api/historyEvent/
//@desc     Create a history event
//@access   Private
router.post("/", (req, res) => {
  // TODO: Validation
  // const { errors, isValid } = validatePostInput(req.body);

  // if (!isValid) {
  //   // if any errors, send 400 with errors object
  //   return res.status(400).json(errors);
  // }

  // const newCoordinate = new Coordinate({
  //   latitude: req.body.latitude,
  //   longitude: req.body.longitude
  // })

  const historyEventFields = {};
  historyEventFields.name = req.body.name;
  historyEventFields.latitude = req.body.latitude;
  historyEventFields.longitude = req.body.longitude;
  if (req.body.cooridnates)
    historyEventFields.coordinates = req.body.coordinates;
  if (req.body.locationName)
    historyEventFields.locationName = req.body.locationName;
  if (req.body.period) historyEventFields.period = req.body.period;
  if (req.body.description)
    historyEventFields.description = req.body.description;
  if (req.body.imgUrl) historyEventFields.imgUrl = req.body.imgUrl;

  const newHistoryEvent = new HistoryEvent(historyEventFields);

  newHistoryEvent
    .save()
    .then(he => res.json(he))
    .catch(err => res.json(err));
});

//@route    POST api/historyEvent/:id
//@desc     Edit a history event
//@access   Private
router.post("/:id", (req, res) => {
  // TODO: Validation
  // const { errors, isValid } = validatePostInput(req.body);

  // if (!isValid) {
  //   // if any errors, send 400 with errors object
  //   return res.status(400).json(errors);
  // }

  // const newCoordinate = new Coordinate({
  //   latitude: req.body.latitude,
  //   longitude: req.body.longitude
  // })

  const historyEventFields = {};
  historyEventFields.name = req.body.name;
  historyEventFields.latitude = req.body.latitude;
  historyEventFields.longitude = req.body.longitude;
  if (req.body.cooridnates)
    historyEventFields.coordinates = req.body.coordinates;
  if (req.body.locationName)
    historyEventFields.locationName = req.body.locationName;
  if (req.body.period) historyEventFields.period = req.body.period;
  if (req.body.description)
    historyEventFields.description = req.body.description;
  if (req.body.imgUrl) historyEventFields.imgUrl = req.body.imgUrl;

  HistoryEvent.findOneAndUpdate(
    { _id: req.params.id },
    { $set: historyEventFields },
    { new: true }
  )
    .then(newHistoryEvent => {
      if (newHistoryEvent) {
        res.json(newHistoryEvent);
      } else {
        res
          .status(404)
          .json({ unexpectedError: "An unexpected error happened" });
      }
    })
    .catch(err =>
      res
        .status(404)
        .json({ noHistoryEventFound: "No historyEvent found with this id" })
    );
});

//@route   DELETE api/historyEvent/:id
//@desc    Delete historyEvent
//@access  Private
router.delete("/:id", (req, res) => {
  HistoryEvent.findById(req.params.id)
    .then(historyEvent => {
      historyEvent
        .remove()
        .then(() => res.json({ success: true }))
        .catch(err => res.json(err));
    })
    .catch(err =>
      res
        .status(404)
        .json({ noHistoryEventFound: "No historyEvent found with this id" })
    );
});

module.exports = router;
