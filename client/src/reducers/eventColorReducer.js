import {
  REASSIGN_ALL_EVENT_COLORS,
  DELETE_EVENT_COLOR_PAIR,
  ASSIGN_EVENT_COLOR_PAIR
} from "../actions/types";

const initialState = {
  eventColor: {}
};

const colorOptions = [
  "red",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "black",
  "orange"
];

export default function(state = initialState, action) {
  switch (action.type) {
    case REASSIGN_ALL_EVENT_COLORS:
      var newEventColor = {};
      var count = 0;
      action.payload.forEach(function(historyEvent) {
        var color = colorOptions[count % colorOptions.length];
        newEventColor[historyEvent._id] = color;
        count++;
      });

      return {
        ...state,
        eventColor: newEventColor
      };
    case DELETE_EVENT_COLOR_PAIR:
    case ASSIGN_EVENT_COLOR_PAIR:
    default:
      return state;
  }
}
