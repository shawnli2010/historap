import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import MapExample from "./components/MapExample";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header />

          <div className="row content">
            <div className="mp-wrapper">
              <div className="map">
                <MapExample />
              </div>
              <div className="periodBar">periodBar</div>
            </div>
            <div className="eventList">eventList</div>
          </div>

          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
