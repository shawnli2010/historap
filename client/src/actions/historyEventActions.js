import axios from "axios";

import { GET_ERRORS, GET_HISTORY_EVENTS } from "./types";

// Get history event by object id

// Create or edit history event

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
