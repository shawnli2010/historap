import {
  REASSIGN_ALL_EVENT_COLORS,
  DELETE_EVENT_COLOR_PAIR,
  ASSIGN_EVENT_COLOR_PAIR
} from "../actions/types";

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

function initializeColorCount() {
  var colorCount = {};
  for (var i in colorOptions) {
    colorCount[colorOptions[i]] = 0;
  }
  return colorCount;
}

const initialState = {
  eventColor: {},
  colorCount: initializeColorCount() // TOUGHT CONFIRM: this can be accessed in eventMap.js by doing const { colorCount } = this.props.eventColor;
};

var newEventColor, newColorCount;
export default function(state = initialState, action) {
  switch (action.type) {
    case REASSIGN_ALL_EVENT_COLORS:
      var historyEvents = action.payload;

      newEventColor = {};
      newColorCount = initializeColorCount();

      var count = 0;
      historyEvents.forEach(function(historyEvent) {
        var color = colorOptions[count % colorOptions.length];
        newEventColor[historyEvent._id] = color;
        newColorCount[color]++;
        count++;
      });

      return {
        ...state,
        eventColor: newEventColor,
        colorCount: newColorCount
      };
    case DELETE_EVENT_COLOR_PAIR:
      var toDeleteHistoryEventId = action.payload;

      newEventColor = Object.keys(state.eventColor)
        .filter(historyEventId => historyEventId !== toDeleteHistoryEventId)
        .reduce((obj, historyEventId) => {
          obj[historyEventId] = state.eventColor[historyEventId];
          return obj;
        }, {});

      var historyEventColor = state.eventColor[toDeleteHistoryEventId];
      newColorCount = {
        ...state.colorCount,
        [historyEventColor]: state.colorCount[historyEventColor] - 1
      };

      return {
        ...state,
        eventColor: newEventColor,
        colorCount: newColorCount
      };

    case ASSIGN_EVENT_COLOR_PAIR:
      var historyEvent = action.payload;

      var colorToAssign = getColorToAssign(state.colorCount);
      newEventColor = {
        ...state.eventColor,
        [historyEvent._id]: colorToAssign
      };
      newColorCount = {
        ...state.colorCount,
        [colorToAssign]: state.colorCount[colorToAssign] + 1
      };

      return {
        ...state,
        eventColor: newEventColor,
        colorCount: newColorCount
      };
    default:
      return state;
  }
}

function getColorToAssign(colorCount) {
  var colorToAssign = colorOptions[0];

  var minColorCount = Number.MAX_SAFE_INTEGER;
  for (var color in colorCount) {
    if (colorCount[color] < minColorCount) {
      minColorCount = colorCount[color];
      colorToAssign = color;
    }
  }

  return colorToAssign;
}
