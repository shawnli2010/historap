import React, { Component } from "react";
import "../../App.css";
import EventMap from "./EventMap";
import PeriodBar from "./PeriodBar";

class MapPeriodContainer extends Component {
  render() {
    return (
      <div className="mp-wrapper">
        <div className="map">
          <EventMap />
        </div>
        <PeriodBar />
      </div>
    );
  }
}

export default MapPeriodContainer;
