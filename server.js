const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const passport = require("passport");

// const users = require("./routes/api/users");
const historyEvent = require("./routes/api/historyEvent");
const historyMap = require("./routes/api/historyMap");

const app = express();

const logWithCurrentTime = require("./utility/logging");

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => logWithCurrentTime("MongoDB Connected"))
  .catch(err => logWithCurrentTime(err));

// Passport Middleware
// app.use(passport.initialize());

// Passport Config (In passport, different authentication methods are called "strategy", like local, google OAuth, jwt etc)
// require("./config/passport")(passport);

// Use routes
// app.use("/api/users", users);
app.use("/api/historyEvent", historyEvent);
app.use("/api/historyMap", historyMap);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  logWithCurrentTime(`Server running on port ${port}`);
});
