import React, { Component } from "react";
import "../../App.css";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { googleMapAPIKey } from "../../config/keys";
import { isNull } from "lodash";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  singleSelectHistoryEvent,
  deselectAllHistoryEvents
} from "../../actions/selectedEventIdActions";

const mapIconPath = process.env.PUBLIC_URL + "/assets/icons/map-marker/";

class EventMap extends Component {
  constructor(props) {
    super(props);

    this.singleSelectEvent = this.singleSelectEvent.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  singleSelectEvent(props, marker, e) {
    // Pass the object id through name which is a bit hacky
    // Need to find a better way
    this.props.singleSelectHistoryEvent(props.name);
  }

  onMapClicked() {
    this.props.deselectAllHistoryEvents();
  }

  render() {
    const { historyEventsOnPage } = this.props.historyEventsOnPage;
    const { eventColor } = this.props.eventColor;
    const { selectedEventIds } = this.props.selectedEventIds;

    let markers;
    if (!isNull(historyEventsOnPage)) {
      markers = historyEventsOnPage.map(m => {
        var iconImageName =
          selectedEventIds.indexOf(m._id) !== -1
            ? "map-marker-selected.png"
            : `map-marker-${eventColor[m._id]}.png`;

        return (
          <Marker
            key={m._id}
            name={m._id}
            title={m.name}
            position={{ lat: m.latitude, lng: m.longitude }}
            icon={{
              url: mapIconPath + iconImageName,
              scaledSize: new this.props.google.maps.Size(32, 32)
            }}
            onClick={this.singleSelectEvent}
          />
        );
      });
    }

    return (
      <Map
        google={this.props.google}
        zoom={4}
        initialCenter={{
          lat: 39.9042,
          lng: 116.4074
        }}
        onClick={this.onMapClicked}
      >
        {markers}
      </Map>
    );
  }
}

EventMap.propTypes = {
  historyEventsOnPage: PropTypes.object.isRequired,
  eventColor: PropTypes.object.isRequired,
  selectedEventIds: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  historyEventsOnPage: state.historyEventsOnPage,
  eventColor: state.eventColor,
  selectedEventIds: state.selectedEventIds
});

export default connect(
  mapStateToProps,
  { singleSelectHistoryEvent, deselectAllHistoryEvents }
)(
  GoogleApiWrapper({
    apiKey: googleMapAPIKey
  })(EventMap)
);
