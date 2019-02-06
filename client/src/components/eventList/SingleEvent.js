import React, { Component } from "react";
import "../../App.css";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

class SingleEvent extends Component {
  render() {
    const historyEvent = this.props.historyEvent;

    return (
      <div
        href="#"
        className="singleEvent list-group-item list-group-item-action"
        key={historyEvent._id}
      >
        <p>name: {historyEvent.name}</p>
        <p>lat: {historyEvent.latitude}</p>
        <p>lon: {historyEvent.longitude}</p>
        <p>happened: 1998</p>
        <div className="threeButtonsRow">
          <Button className="hpButton" color="primary">
            Detail
          </Button>
          <Button className="hpButton" color="secondary">
            Temp
          </Button>
          <Button className="hpButton" color="danger">
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

export default SingleEvent;
