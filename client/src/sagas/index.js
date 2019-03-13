import { takeLatest, all } from "redux-saga/effects";

// Actually I just realized that I don't need to use saga here
// I can just dispatch two actions after I received the historyEvents from server
// But I'll leave it here in case I need to use redux-saga in the future
function* assignColorToEventsWorker() {
  // const json = yield fetch('https://newsapi.org/v1/articles?
  //       source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  //       .then(response => response.json(), );
  // yield put({ type: "NEWS_RECEIVED", json: json.articles, });
  yield "news received";
}

function* getHistoryEventsWatcher() {
  yield takeLatest("GET_NEWS", assignColorToEventsWorker);
}

export default function* rootSaga() {
  yield all([getHistoryEventsWatcher()]);
}
