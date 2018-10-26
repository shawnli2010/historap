var _ = require("lodash");

module.exports = function validateHistoryEventInput(data) {
  let errors = {};

  if (_.isEmpty(data.name)) {
    errors.name = "history event name cannot be empty";
  }

  if (_.isEmpty(data.latitude)) {
    errors.latitude = "latitude cannot be empty";
  }

  var latitude = Number(data.latitude);
  if (_.isNaN(latitude)) {
    errors.latitude = "latitude must be a number";
  }

  if (latitude < 0 || latitude > 90) {
    errors.latitude = "latitude must be between 0 and 90";
  }

  if (_.isEmpty(data.longitude)) {
    errors.longitude = "longitude cannot be empty";
  }

  var longitude = Number(data.longitude);
  if (_.isNaN(longitude)) {
    errors.longitude = "longitude must be a number";
  }

  if (longitude < 0 || longitude > 180) {
    errors.longitude = "longitude must be between 0 and 90";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
