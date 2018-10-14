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

module.exports = router;
