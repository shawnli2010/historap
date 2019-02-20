import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHistoryEvents } from "./actions/historyEventActions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import ManageEvents from "./components/manageEvents/ManageEvents";

class App extends Component {
  componentDidMount() {
    this.props.getHistoryEvents();
  }

  render() {
    return (
      <Router>
        <div className="mainContainer">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/manage-events" component={ManageEvents} />
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  getHistoryEvents: PropTypes.func.isRequired,
  historyEvents: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  historyEvents: state.historyEvents
});

export default connect(
  mapStateToProps,
  { getHistoryEvents }
)(App);
