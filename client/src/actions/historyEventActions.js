import axios from "axios";

import { GET_ERRORS, GET_HISTORY_EVENTS } from "./types";

// Get history event by object id

// Create or edit history event
export const createHistoryEvent = (historyEventData, history) => dispatch => {
  // console.log("createHistoryEvent action");
  axios
    .post("/api/historyEvent", historyEventData)
    .then(res => {
      getAllEventsRequest(dispatch);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Delete history event
export const deleteHistoryEvent = (historyEventId, history) => dispatch => {
  // console.log("createHistoryEvent action");
  axios
    .delete("/api/historyEvent/" + historyEventId)
    .then(res => {
      getAllEventsRequest(dispatch);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Get all history events
export const getHistoryEvents = () => dispatch => {
  getAllEventsRequest(dispatch);
};

const getAllEventsRequest = dispatch => {
  axios
    .get("/api/historyEvent")
    .then(res =>
      dispatch({
        type: GET_HISTORY_EVENTS,
        payload: res.data
      })
    )
    .catch(err => dispatch({ type: GET_HISTORY_EVENTS, payload: null }));
};
