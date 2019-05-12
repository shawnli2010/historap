import {
  GET_EVENT_GROUPS,
  SELECT_EVENT_GROUPS,
  CREATE_EVENT_GROUP,
  DELETE_EVENT_GROUP
} from "../actions/types";

const initialState = {
  eventGroups: [],
  historyEventsOnPage: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT_GROUPS:
      return {
        ...state,
        eventGroups: action.payload,
        historyEventsOnPage: extractHistoryEventsFromGroups(action.payload)
      };
    case SELECT_EVENT_GROUPS:
      return {
        ...state,
        eventGroups: action.payload,
        historyEventsOnPage: extractHistoryEventsFromGroups(action.payload)
      };
    default:
      return state;
  }
}

function extractHistoryEventsFromGroups(eventGroups) {
  return eventGroups.reduce((historyEventsOnPageSoFar, eventGroup) => {
    return historyEventsOnPageSoFar.concat(eventGroup.historyEvents);
  }, []);
}
