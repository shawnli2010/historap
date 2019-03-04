import React, { Component } from "react";
import "../../App.css";
import { isNull } from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SingleEvent from "./SingleEvent";

class EventList extends Component {
  render() {
    const { historyEventsOnPage } = this.props.historyEventsOnPage;
    let listItems;

    if (!isNull(historyEventsOnPage)) {
      listItems = historyEventsOnPage.map(event => (
        <SingleEvent key={event._id} historyEvent={event} />
      ));
    }

    return <div className="eventList list-group">{listItems}</div>;
  }
}

EventList.propTypes = {
  historyEventsOnPage: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  historyEventsOnPage: state.historyEventsOnPage
});

export default connect(
  mapStateToProps,
  {}
)(EventList);
