import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHistoryEvents } from "../../actions/historyEventActions";

import MapPeriodContainer from "../mapAndPeriod/MapPeriodContainer";
import EventList from "../eventList/EventList";

class Landing extends Component {
  componentDidMount() {
    this.props.getHistoryEvents({ isOnMap: true });
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

// export default Landing;

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
