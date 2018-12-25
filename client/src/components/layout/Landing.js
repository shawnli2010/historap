import React, { Component } from "react";
import { isNull } from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHistoryEvents } from "../../actions/historyEventActions";

import MapPeriodContainer from "../mapAndPeriod/MapPeriodContainer";
import EventList from "../eventList/EventList";

class Landing extends Component {
  componentDidMount() {
    this.props.getHistoryEvents();
  }

  render() {
    return (
      <div className="content">
        <MapPeriodContainer />
        <EventList />
      </div>
    );
  }
}

Landing.propTypes = {
  getHistoryEvents: PropTypes.func.isRequired,
  historyEvents: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  historyEvents: state.historyEvents
});

export default connect(
  mapStateToProps,
  { getHistoryEvents }
)(Landing);
