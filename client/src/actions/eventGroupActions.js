import axios from "axios";

import {
  GET_EVENT_GROUPS,
  SELECT_EVENT_GROUPS,
  CREATE_EVENT_GROUP,
  DELETE_EVENT_GROUP,
  GET_ERRORS
} from "./types";

export const createEventGroup = (eventGroupData, history) => dispatch => {
  axios
    .post("/api/eventGroup", eventGroupData)
    .then(res => {
      dispatch({
        type: CREATE_EVENT_GROUP,
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

// export const deleteEventGroup = (id, history) => dispatch => {
//   axios
//     .delete(`/api/eventGroup/${id}`)
//     .then(res => {
//       dispatch({
//         type: DELETE_EVENT_GROUP,
//         payload: id
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       });
//     });
// };

// Get all event groups with history events populated
export const getEventGroups = () => dispatch => {
  axios
    .get("/api/eventGroup/withHistoryEvents")
    .then(res => {
      dispatch({
        type: GET_EVENT_GROUPS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
          ? err.response.data
          : { error: "err.response is undefined or null" }
      });
    });
};
