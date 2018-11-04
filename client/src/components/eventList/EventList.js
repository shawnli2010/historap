import React, { Component } from "react";
import "../../App.css";
import { isNull } from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class EventList extends Component {
  render() {
    const { historyEvents } = this.props.historyEvent;
    let listItems;

    if (!isNull(historyEvents)) {
      listItems = historyEvents.map(m => (
        <div
          href="#"
          className="list-group-item list-group-item-action"
          key={m._id}
        >
          <p>{m.name}</p>
          <p>{m.name}</p>
          <p>{m.name}</p>
          <p>{m.name}</p>
          <p>{m.name}</p>
          <p>{m.name}</p>
          <p>{m.name}</p>
        </div>
      ));
    }

    return <div className="eventList list-group">{listItems}</div>;
  }
}

EventList.propTypes = {
  historyEvent: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  historyEvent: state.historyEvent
});

export default connect(
  mapStateToProps,
  {}
)(EventList);
