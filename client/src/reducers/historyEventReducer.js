import { GET_HISTORY_EVENTS } from "../actions/types";

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
    default:
      return state;
  }
}
