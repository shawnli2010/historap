import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

import CreateEvent from "./components/createOrEditEvent/CreateEvent";
import ManageEvents from "./components/manageEvents/ManageEvents";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="mainContainer">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/create-event" component={CreateEvent} />
            <Route exact path="/manage-events" component={ManageEvents} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
