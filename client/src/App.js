import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MapPeriodContainer from "./components/mapAndPeriod/MapPeriodContainer";
import EventList from "./components/eventList/EventList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Header />
            <div className="row content">
              <MapPeriodContainer />
              <EventList />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
