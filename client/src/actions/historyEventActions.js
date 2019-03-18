import axios from "axios";

import {
  GET_ERRORS,
  GET_HISTORY_EVENTS,
  CREATE_HISTORY_EVENT,
  DELETE_HISTORY_EVENT,
  REASSIGN_ALL_EVENT_COLORS,
  DELETE_EVENT_COLOR_PAIR,
  ASSIGN_EVENT_COLOR_PAIR
} from "./types";

//TTODO: Get history event by object id

// Create or edit history event
export const createHistoryEvent = (historyEventData, history) => dispatch => {
  axios
    .post("/api/historyEvent", historyEventData)
    .then(res => {
      dispatch({
        type: CREATE_HISTORY_EVENT,
        payload: res.data
      });
      dispatch({
        type: ASSIGN_EVENT_COLOR_PAIR,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Delete history event
export const deleteHistoryEvent = (id, history) => dispatch => {
  axios
    .delete(`/api/historyEvent/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_HISTORY_EVENT,
        payload: id
      });
      dispatch({
        type: DELETE_EVENT_COLOR_PAIR,
        payload: id
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Get history events
export const getHistoryEvents = params => dispatch => {
  axios
    .get("/api/historyEvent", {
      params: params
    })
    .then(res => {
      dispatch({
        type: GET_HISTORY_EVENTS,
        payload: res.data
      });
      dispatch({
        type: REASSIGN_ALL_EVENT_COLORS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
