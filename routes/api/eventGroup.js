const express = require("express");
const router = express.Router();
const EventGroup = require("../../models/EventGroup");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

//@route    GET api/EventGroup/test
//@desc     Test profile route
//@access   Public
router.get("/test", (req, res) => {
  res.json({ msg: "EventGroup Works" });
});

//@route    GET api/eventGroup/
//@desc     Get eventGroups
//@access   Private
router.get("/", (req, res) => {
  // TODO: remove the temporary filter for lat and lon
  var prom = EventGroup.find();

  prom
    .then(eventGroups => {
      res.json(eventGroups);
    })
    .catch(err =>
      res
        .status(404)
        .json({ noEventGroupFound: "There are no event groups created" })
    );
});

//@route    GET api/eventGroup/getHistoryEvents
//@desc     Get all history events in this group
//@access   Private
router.get("/getHistoryEvents", (req, res) => {
  EventGroup.findById(req.query.eventGroupId)
    .populate("historyEvents")
    .exec(function(err, result) {
      if (err) {
        res.json(err);
      } else if (result) {
        res.json(result.historyEvents);
      } else {
        res.json([]);
      }
    });
});

//@route    POST api/eventGroup/
//@desc     Create an event group
//@access   Private
router.post("/", (req, res) => {
  // const { errors, isValid } = validateHistoryEventInput(req.body);

  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  const eventGroupFields = {};
  eventGroupFields.name = req.body.name;
  eventGroupFields.historyEvents = generateObjectIdArray(
    req.body.historyEvents
  );
  if (req.body.areaName) eventGroupFields.areaName = req.body.areaName;

  const newEventGroup = new EventGroup(eventGroupFields);

  newEventGroup
    .save()
    .then(he => res.json(he))
    .catch(err => res.json(err));
});

generateObjectIdArray = function(objectIdArrayString) {
  var stringArray = objectIdArrayString.split(",");
  var objectIdArray = [];
  stringArray.forEach(function(idString) {
    objectIdArray.push(new ObjectId(idString));
  });
  return objectIdArray;
};

module.exports = router;
