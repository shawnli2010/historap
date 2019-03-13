import React, { Component } from "react";
import "../../App.css";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { googleMapAPIKey } from "../../config/keys";
import { isNull } from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapIconPath = process.env.PUBLIC_URL + "/assets/icons/map-marker/";

class EventMap extends Component {
  render() {
    const { historyEventsOnPage } = this.props.historyEventsOnPage;
    const { eventColor } = this.props.eventColor;
    let markers;
    if (!isNull(historyEventsOnPage)) {
      markers = historyEventsOnPage.map(m => (
        <Marker
          key={m._id}
          title={m.name}
          position={{ lat: m.latitude, lng: m.longitude }}
          icon={{
            url: `${mapIconPath}map-marker-${eventColor[m._id]}.png`,
            scaledSize: new this.props.google.maps.Size(32, 32)
          }}
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

EventMap.propTypes = {
  historyEventsOnPage: PropTypes.object.isRequired,
  eventColor: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  historyEventsOnPage: state.historyEventsOnPage,
  eventColor: state.eventColor
});

export default connect(
  mapStateToProps,
  {}
)(
  GoogleApiWrapper({
    apiKey: googleMapAPIKey
  })(EventMap)
);
