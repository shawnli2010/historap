import axios from "axios";

import { GET_ERRORS, GET_HISTORY_EVENTS } from "./types";

// Get history event by object id

// Create or edit history event
export const createHistoryEvent = (historyEventData, history) => dispatch => {
  // console.log("createHistoryEvent action");
  axios
    .post("/api/historyEvent", historyEventData)
    .then(res => {
      history.push("/");
    }) // TODO: Probably need to set the global historyEvents list object in redux
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Delete history event

// Get all history events
export const getHistoryEvents = () => dispatch => {
  // dispatch(setProfileLoading()); TODO: add spinner
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
