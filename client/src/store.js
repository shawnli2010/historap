import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

// Because we have index.js in reducers folder, node will pick it by default
// https://stackoverflow.com/questions/35442174/javascript-import-from-folder-with-index-js
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export default store;
