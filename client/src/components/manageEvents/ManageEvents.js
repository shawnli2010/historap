import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
import { isUndefined } from "lodash";

class ManageEvents extends Component {
  prepareDataForTable = () => {
    const { historyEvents } = this.props.historyEvents;
    const data = [];

    for (var i in historyEvents) {
      var historyEvent = historyEvents[i];
      var item = {
        name: historyEvent.name,
        latitude: historyEvent.latitude,
        longitude: historyEvent.longitude,
        year: isUndefined(historyEvent.period)
          ? "unknown"
          : historyEvent.period.year,
        month: isUndefined(historyEvent.period)
          ? "unknown"
          : historyEvent.period.month,
        date: isUndefined(historyEvent.period)
          ? "unknown"
          : historyEvent.period.date
      };

      data.push(item);
    }

    return data;
  };

  render() {
    let materialTable;

    materialTable = (
      <MaterialTable
        columns={[
          { title: "Name", field: "name" },
          { title: "Latitude", field: "latitude" },
          { title: "Longitude", field: "longitude" },
          { title: "Year", field: "year" }
        ]}
        data={this.prepareDataForTable()}
        title="Manage History Events"
        actions={[
          {
            icon: "account_circle",
            tooltip: "Show User Info",
            onClick: (event, rowData) => {
              alert("You clicked user " + rowData.name);
            }
          },
          rowData => ({
            icon: "account_circle",
            tooltip: "Show User Info",
            disabled: rowData.birthYear >= 2000,
            onClick: (event, rowData) => {
              alert("You clicked user " + rowData.name);
            }
          }),
          {
            icon: "account_circle",
            tooltip: "Show User Info",
            onClick: (event, rowData) => {
              alert("You clicked user " + rowData.name);
            },
            iconProps: {
              style: {
                fontSize: 30,
                color: "green"
              }
            }
          }
        ]}
        options={{
          actionsColumnIndex: -1
        }}
      />
    );

    return <div>{materialTable}</div>;
  }
}

ManageEvents.propTypes = {
  historyEvents: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  historyEvents: state.historyEvents
});

export default connect(
  mapStateToProps,
  {}
)(ManageEvents);
