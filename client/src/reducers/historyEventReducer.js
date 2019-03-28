import {
  GET_HISTORY_EVENTS,
  DELETE_HISTORY_EVENT,
  CREATE_HISTORY_EVENT
} from "../actions/types";

const initialState = {
  historyEventsOnPage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY_EVENTS:
      return {
        ...state,
        historyEventsOnPage: action.payload
      };
    case CREATE_HISTORY_EVENT:
      return {
        ...state,
        historyEventsOnPage: [action.payload, ...state.historyEventsOnPage]
      };
    case DELETE_HISTORY_EVENT:
      return {
        ...state,
        historyEventsOnPage: state.historyEventsOnPage.filter(
          historyEvent => historyEvent._id !== action.payload
        )
      };
    default:
      return state;
  }
}
