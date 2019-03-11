const express = require("express");
const router = express.Router();
const validateHistoryEventInput = require("../../validation/historyEvent");
const parsePeriod = require("../../utility/parsing");
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

//@route    GET api/historyEvent/
//@desc     Get historyEvents
//@access   Private
router.get("/", (req, res) => {
  // TODO: remove the temporary filter for lat and lon
  var prom = HistoryEvent.find({
    latitude: { $gte: 30, $lt: 40 },
    longitude: { $gte: 100, $lt: 130 }
  });

  if (req.query.isOnMap) {
    prom.find({ isOnMap: req.query.isOnMap });
  }

  prom
    .then(historyEvents => {
      res.json(historyEvents);
    })
    .catch(err =>
      res
        .status(404)
        .json({ noHistoryEventFound: "There are no history events" })
    );
});

//@route    POST api/historyEvent/
//@desc     Create a history event
//@access   Private
router.post("/", (req, res) => {
  const { errors, isValid } = validateHistoryEventInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const historyEventFields = {};
  historyEventFields.name = req.body.name;
  historyEventFields.latitude = req.body.latitude;
  historyEventFields.longitude = req.body.longitude;
  historyEventFields.isOnMap = req.body.isOnMap;
  if (req.body.cooridnates)
    historyEventFields.coordinates = req.body.coordinates;
  if (req.body.locationName)
    historyEventFields.locationName = req.body.locationName;
  if (req.body.period) historyEventFields.period = parsePeriod(req.body.period);

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
  const { errors, isValid } = validateHistoryEventInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

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
