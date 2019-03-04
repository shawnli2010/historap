import { GET_HISTORY_EVENTS } from "../actions/types";
import { DELETE_HISTORY_EVENT } from "../actions/types";
import { CREATE_HISTORY_EVENT } from "../actions/types";

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
    case DELETE_HISTORY_EVENT:
      return {
        ...state,
        historyEventsOnPage: state.historyEventsOnPage.filter(
          historyEvent => historyEvent._id !== action.payload
        )
      };
    case CREATE_HISTORY_EVENT:
      return {
        ...state,
        historyEventsOnPage: [action.payload, ...state.historyEventsOnPage]
      };
    default:
      return state;
  }
}
