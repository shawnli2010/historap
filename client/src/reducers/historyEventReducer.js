import { GET_HISTORY_EVENTS } from "../actions/types";
import { DELETE_HISTORY_EVENT } from "../actions/types";
import { CREATE_HISTORY_EVENT } from "../actions/types";

const initialState = {
  historyEvents: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY_EVENTS:
      return {
        ...state,
        historyEvents: action.payload
      };
    case DELETE_HISTORY_EVENT:
      return {
        ...state,
        historyEvents: state.historyEvents.filter(
          historyEvent => historyEvent._id !== action.payload
        )
      };
    case CREATE_HISTORY_EVENT:
      return {
        ...state,
        historyEvents: [action.payload, ...state.historyEvents]
      };
    default:
      return state;
  }
}
