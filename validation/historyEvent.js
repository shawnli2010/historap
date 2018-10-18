var _ = require("lodash");

module.exports = function validateHistoryEventInput(data) {
  let errors = {};

  if (_.isEmpty(data.name)) {
    errors.name = "history event name cannot be empty";
  }

  if (_.isEmpty(data.latitude)) {
    errors.latitude = "latitude cannot be empty";
  }

  if (!_.isNumber(data.latitude)) {
    errors.latitude = "latitude must be a number";
  }

  if (data.latitude < 0 || data.latitude > 90) {
    errors.latitude = "latitude must be between 0 and 90";
  }

  if (_.isEmpty(data.longitude)) {
    errors.longitude = "longitude cannot be empty";
  }

  if (!_.isNumber(data.longitude)) {
    errors.longitude = "longitude must be a number";
  }

  if (data.longitude < 0 || data.longitude > 90) {
    errors.longitude = "longitude must be between 0 and 90";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
