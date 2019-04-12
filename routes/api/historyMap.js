const express = require("express");
const router = express.Router();
const HistoryMap = require("../../models/HistoryMap");

//@route    GET api/historyEvent/test
//@desc     Test profile route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "HistoryMap Works" }));

//@route    GET api/historyMap/
//@desc     Get historyMaps
//@access   Private
router.get("/", (req, res) => {
  // TODO: remove the temporary filter for lat and lon
  var prom = HistoryMap.find();

  prom
    .then(historyMaps => {
      res.json(historyMaps);
    })
    .catch(err =>
      res
        .status(404)
        .json({ noHistoryMapFound: "There are no history maps created" })
    );
});

//@route    POST api/historyMap/
//@desc     Create a history map
//@access   Private
router.post("/", (req, res) => {
  // const { errors, isValid } = validateHistoryEventInput(req.body);

  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  const historyMapFields = {};
  historyMapFields.name = req.body.name;
  historyMapFields.historyEvents = req.body.historyEvents;
  if (req.body.areaName) historyMapFields.areaName = req.body.areaName;

  const newHistoryMap = new HistoryMap(historyMapFields);

  newHistoryMap
    .save()
    .then(he => res.json(he))
    .catch(err => res.json(err));
});

module.exports = router;
