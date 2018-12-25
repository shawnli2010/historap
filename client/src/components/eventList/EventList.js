import React, { Component } from "react";
import "../../App.css";
import { isNull } from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SingleEvent from "./SingleEvent";

class EventList extends Component {
  render() {
    const { historyEvents } = this.props.historyEvents;
    let listItems;

    if (!isNull(historyEvents)) {
      listItems = historyEvents.map(event => (
        <SingleEvent key={event._id} historyEvent={event} />
      ));
    }

    return <div className="eventList list-group">{listItems}</div>;
  }
}

EventList.propTypes = {
  historyEvents: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  historyEvents: state.historyEvents
});

export default connect(
  mapStateToProps,
  {}
)(EventList);
