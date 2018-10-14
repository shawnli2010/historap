const logWithCurrentTime = message => {
  var d = new Date();
  var datestring =
    d.getMonth() +
    1 +
    "/" +
    d.getDate() +
    "/" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes();

  console.log(datestring + " " + message);
};

module.exports = logWithCurrentTime;
