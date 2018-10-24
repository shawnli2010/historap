import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { googleMapAPIKey } from "../config/keys";
import { isEmpty } from "lodash";

export class MapExample extends Component {
  render() {
    let markers;

    if (!isEmpty(this.props.locations)) {
      markers = this.props.locations.map((m, index) => (
        <Marker
          key={index}
          title={m.name}
          position={{ lat: m.lat, lng: m.lng }}
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

export default GoogleApiWrapper({
  apiKey: googleMapAPIKey
})(MapExample);
