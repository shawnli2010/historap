import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import MapExample from "./components/MapExample";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div class="container">
          <div class="row header">
            <p>
              <b>header</b>
              <br />
              <br />
              (sized to content)
            </p>
          </div>
          <div class="row content">
            <div className="mp-wrapper">
              <div className="map">
                <MapExample />
              </div>
              <div className="periodBar">periodBar</div>
            </div>
            <div className="eventList">eventList</div>
          </div>
          <div class="row footer">
            <p>
              <b>footer</b> (fixed height)
            </p>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
