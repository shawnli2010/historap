import React, { Component } from "react";
import "../../App.css";
import { isNull } from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SingleEvent from "./SingleEvent";
import { singleSelectHistoryEvent } from "../../actions/selectedEventIdActions";

class EventList extends Component {
  constructor(props) {
    super(props);

    this.onSingleEventClick = this.onSingleEventClick.bind(this);
  }

  onSingleEventClick(historyEvent) {
    this.props.singleSelectHistoryEvent(historyEvent._id);
  }

  render() {
    const { historyEventsOnPage } = this.props.historyEventsOnPage;
    let listItems;

    if (!isNull(historyEventsOnPage)) {
      listItems = historyEventsOnPage.map(event => (
        <SingleEvent
          key={event._id}
          historyEvent={event}
          handleClickOnSingleEvent={this.onSingleEventClick}
        />
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
  { singleSelectHistoryEvent }
)(EventList);
