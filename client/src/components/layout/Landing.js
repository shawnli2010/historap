import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEventGroups } from "../../actions/eventGroupActions";

import MapPeriodContainer from "../mapAndPeriod/MapPeriodContainer";
import EventList from "../eventList/EventList";

class Landing extends Component {
  componentDidMount() {
    this.props.getEventGroups();
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
  getEventGroups: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getEventGroups }
)(Landing);
