import { combineReducers } from "redux";
// import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import historyEventReducer from "./historyEventReducer";

// key in the object maps to the key in the state
export default combineReducers({
  // auth: authReducer, // for example you can access state.auth since auth is the key here
  errors: errorReducer,
  historyEvent: historyEventReducer
});
