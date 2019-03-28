import {
  SELECT_HISTORY_EVENT,
  DESELECT_HISTORY_EVENT,
  SINGLE_SELECT_HISTORY_EVENT,
  DESELECT_ALL_HISTORY_EVENTS
} from "../actions/types";

const initialState = {
  selectedEventIds: []
};

var selectedEventId;
export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_HISTORY_EVENT:
      selectedEventId = action.payload;

      return {
        ...state,
        selectedEventIds: [selectedEventId, ...state.selectedEventIds]
      };
    case DESELECT_HISTORY_EVENT:
      selectedEventId = action.payload;

      return {
        ...state,
        selectedEventIds: state.selectedEventIds.filter(
          sId => sId !== selectedEventId
        )
      };
    case SINGLE_SELECT_HISTORY_EVENT:
      selectedEventId = action.payload;
      var newSelectedEventIds =
        state.selectedEventIds.indexOf(selectedEventId) === -1
          ? [selectedEventId]
          : [];
      return {
        ...state,
        selectedEventIds: newSelectedEventIds
      };
    case DESELECT_ALL_HISTORY_EVENTS:
      return {
        ...state,
        selectedEventIds: []
      };
    default:
      return state;
  }
}
