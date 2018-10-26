import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { googleMapAPIKey } from "../config/keys";
import { isNull } from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHistoryEvents } from "../actions/historyEventActions";

class MapExample extends Component {
  componentDidMount() {
    this.props.getHistoryEvents();
  }

  render() {
    const { historyEvents } = this.props.historyEvent;
    let markers;

    if (!isNull(historyEvents)) {
      markers = historyEvents.map(m => (
        <Marker
          key={m._id}
          title={m.name}
          position={{ lat: m.latitude, lng: m.longitude }}
        />
      ));
    }

    return (
      <Map
        google={this.props.google}
        zoom={4}
        initialCenter={{
          lat: 39.9042,
          lng: 116.4074
        }}
      >
        {markers}
      </Map>
    );
  }
}

MapExample.propTypes = {
  getHistoryEvents: PropTypes.func.isRequired,
  historyEvent: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  historyEvent: state.historyEvent
});

export default connect(
  mapStateToProps,
  { getHistoryEvents }
)(
  GoogleApiWrapper({
    apiKey: googleMapAPIKey
  })(MapExample)
);
