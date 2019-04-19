const express = require("express");
const router = express.Router();
const EventGroup = require("../../models/EventGroup");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const ObjectId = mongoose.Types.ObjectId;
const _ = require("lodash");

//@route    GET api/EventGroup/test
//@desc     Test profile route
//@access   Public
router.get("/test", (req, res) => {
  res.json({ msg: "EventGroup Works" });
});

//@route    GET api/eventGroup/
//@desc     Get all eventGroups, without historyEvents populated
//@access   Private
router.get("/", (req, res) => {
  EventGroup.find()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.json(error);
    });
});

//@route    GET api/eventGroup/withHistoryEvents
//@desc     Get all eventGroups, with historyEvents populated
//@access   Private
router.get("/withHistoryEvents", (req, res) => {
  EventGroup.find()
    .then(eventGroups => {
      var eventGroupIds = eventGroups.reduce(
        (eventGroupIdArraySoFar, eventGroup) => {
          eventGroupIdArraySoFar.push(eventGroup._id);
          return eventGroupIdArraySoFar;
        },
        []
      );

      return eventGroupIds;
    })
    .then(eventGroupIds => {
      populateHistoryEvents(eventGroupIds)
        .then(result => {
          res.json(result);
        })
        .catch(error => {
          res.json(error);
        });
    });
});

//@route    GET api/eventGroup/getHistoryEventsSingleGroup
//@desc     Get all history events in this group
//@param    one eventGroupId
//@access   Private
router.get("/getHistoryEventsSingleGroup", (req, res) => {
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

//@route    GET api/getHistoryEventsMultiGroups
//@desc     Get history events of multiple groups
//@param    List of eventGroupIds
//@access   Private
router.get("/getHistoryEventsMultiGroups", (req, res) => {
  var eventGroupIds = [];
  if (req.query.eventGroupIds) {
    eventGroupIds = req.query.eventGroupIds.split(",");
  }

  populateHistoryEvents(eventGroupIds)
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.json(error);
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

generateObjectIdArray = objectIdArrayString => {
  var stringArray = objectIdArrayString.split(",");
  var objectIdArray = [];
  stringArray.forEach(function(idString) {
    objectIdArray.push(new ObjectId(idString));
  });
  return objectIdArray;
};

populateHistoryEvents = eventGroupIds => {
  var queries = [];
  _.forEach(eventGroupIds, eventGroupId => {
    queries.push(EventGroup.findById(eventGroupId).populate("historyEvents"));
  });

  var prom = Promise.all(queries);
  return prom;
};

module.exports = router;
