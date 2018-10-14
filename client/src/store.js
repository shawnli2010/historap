import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Because we have index.js in reducers folder, node will pick it by default
// https://stackoverflow.com/questions/35442174/javascript-import-from-folder-with-index-js
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
