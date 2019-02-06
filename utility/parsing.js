const parsePeriod = periodString => {
  var periodObject = {};
  periodObject.year = Number(periodString.substring(0, 4));
  periodObject.month = Number(periodString.substring(5, 7));
  periodObject.date = Number(periodString.substring(8, 10));

  return periodObject;
};

module.exports = parsePeriod;
