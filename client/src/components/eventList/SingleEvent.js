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
    this.showAlert = this.showAlert.bind(this);
  }

  deleteEvent() {
    this.props.deleteHistoryEvent(this.props.historyEvent._id);
  }

  showAlert() {
    alert("Im an alert");
  }

  render() {
    const historyEvent = this.props.historyEvent;
    const { eventColor } = this.props.eventColor;
    const happenedString =
      historyEvent.period !== undefined
        ? historyEvent.period.year +
          "-" +
          historyEvent.period.month +
          "-" +
          historyEvent.period.date
        : "unknown";

    let tempStyle = {
      paddingLeft: "10px"
    };

    let tempStyle2 = {
      marginBottom: "15px"
    };

    const colorIndicator = eventColor[historyEvent._id];
    let tempStyle3 = {
      backgroundColor: colorIndicator,
      width: "20px",
      height: "20px"
    };

    return (
      <div
        href="#"
        className="singleEvent list-group-item list-group-item-action"
        key={historyEvent._id}
        onClick={this.showAlert}
      >
        <div style={tempStyle3} />
        <p>name: {historyEvent.name}</p>
        <div style={tempStyle2}>
          <span>lat: {historyEvent.latitude}</span>
          <span style={tempStyle}>lon: {historyEvent.longitude}</span>
        </div>
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
  historyEvent: PropTypes.object.isRequired,
  eventColor: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  eventColor: state.eventColor
});

export default withRouter(
  connect(
    mapStateToProps,
    { deleteHistoryEvent }
  )(SingleEvent)
);
