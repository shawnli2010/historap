import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../App.css";
import * as _ from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SingleEvent from "./SingleEvent";
import { singleSelectHistoryEvent } from "../../actions/selectedEventIdActions";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.onSingleEventClick = this.onSingleEventClick.bind(this);
    this.selectedCellDom = null;
  }

  componentDidUpdate() {
    if (this.selectedCellDom) {
      this.selectedCellDom.scrollIntoView(true);
    }
  }

  onSingleEventClick(historyEvent) {
    this.props.singleSelectHistoryEvent(historyEvent._id);
  }

  render() {
    const { historyEventsOnPage } = this.props.eventGroups;
    const { selectedEventIds } = this.props.selectedEventIds;
    let listItems;

    if (historyEventsOnPage) {
      listItems = historyEventsOnPage.map(function(event) {
        var active =
          selectedEventIds.length > 0 && selectedEventIds[0] === event._id;
        var props = {
          key: event._id,
          historyEvent: event,
          handleClickOnSingleEvent: this.onSingleEventClick
        };
        if (active) {
          props.ref = domObject => (this.selectedCellDom = domObject);
        }

        return <SingleEvent {...props} />;
      }, this);
    }

    return <div className="eventList list-group">{listItems}</div>;
  }
}

EventList.propTypes = {
  eventGroups: PropTypes.object.isRequired,
  selectedEventIds: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  eventGroups: state.eventGroups,
  selectedEventIds: state.selectedEventIds
});

export default connect(
  mapStateToProps,
  { singleSelectHistoryEvent }
)(EventList);
