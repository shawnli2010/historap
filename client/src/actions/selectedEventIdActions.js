import {
  SELECT_HISTORY_EVENT,
  DESELECT_HISTORY_EVENT,
  SINGLE_SELECT_HISTORY_EVENT,
  DESELECT_ALL_HISTORY_EVENTS
} from "./types";

export const selectHistoryEvent = (selectedEventId, history) => dispatch => {
  dispatch({
    type: SELECT_HISTORY_EVENT,
    payload: selectedEventId
  });
};

export const deselectHistoryEvent = (selectedEventId, history) => dispatch => {
  dispatch({
    type: DESELECT_HISTORY_EVENT,
    payload: selectedEventId
  });
};

export const singleSelectHistoryEvent = (
  selectedEventId,
  history
) => dispatch => {
  dispatch({
    type: SINGLE_SELECT_HISTORY_EVENT,
    payload: selectedEventId
  });
};

export const deselectAllHistoryEvents = history => dispatch => {
  dispatch({
    type: DESELECT_ALL_HISTORY_EVENTS
  });
};
