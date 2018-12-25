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
        <p>{historyEvent.name}</p>
        <p>{historyEvent.latitude} fake description row</p>
        <p>{historyEvent.longitude} fake description row</p>
        <p>{historyEvent.creationDate} fake location row</p>
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
