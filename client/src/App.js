import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import MapExample from "./components/MapExample";

class App extends Component {
  render() {
    const locations = [
      { name: "Bei Jing", lat: 39.9042, lng: 116.4074 },
      { name: "Shang Hai", lat: 31.2304, lng: 121.4737 },
      { name: "Cheng Du", lat: 30.5728, lng: 104.0668 }
    ];

    return (
      <Provider store={store}>
        <div className="container">
          <div className="row header">
            <p>
              <b>header</b>
              <br />
              <br />
              (sized to content)
            </p>
          </div>
          <div className="row content">
            <div className="mp-wrapper">
              <div className="map">
                <MapExample locations={locations} />
              </div>
              <div className="periodBar">periodBar</div>
            </div>
            <div className="eventList">eventList</div>
          </div>
          <div className="row footer">
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
