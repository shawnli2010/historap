import React, { Component } from "react";
import "../../App.css";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { deleteHistoryEvent } from "../../actions/historyEventActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SingleEvent extends Component {
  constructor(props) {
    super(props);

    this.deleteEvent = this.deleteEvent.bind(this);
  }

  deleteEvent() {
    this.props.deleteHistoryEvent(this.props.historyEvent._id);
  }

  render() {
    const historyEvent = this.props.historyEvent;
    const happenedString =
      historyEvent.period !== undefined
        ? historyEvent.period.year +
          "-" +
          historyEvent.period.month +
          "-" +
          historyEvent.period.date
        : "unknown";

    return (
      <div
        href="#"
        className="singleEvent list-group-item list-group-item-action"
        key={historyEvent._id}
      >
        <p>name: {historyEvent.name}</p>
        <p>lat: {historyEvent.latitude}</p>
        <p>lon: {historyEvent.longitude}</p>
        <p>happened: {happenedString}</p>
        <div className="threeButtonsRow">
          <Button className="hpButton" color="primary">
            Detail
          </Button>
          <Button className="hpButton" color="secondary">
            Temp
          </Button>
          <Button
            className="hpButton"
            color="danger"
            onClick={this.deleteEvent}
          >
            Remove
          </Button>
        </div>
      </div>
    );
  }
}

SingleEvent.propTypes = {
  historyEvent: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    null,
    { deleteHistoryEvent }
  )(SingleEvent)
);
