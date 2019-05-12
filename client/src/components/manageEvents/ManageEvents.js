import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHistoryEvents } from "../../actions/historyEventActions";
import MaterialTable from "material-table";
import * as _ from "lodash";

class ManageEvents extends Component {
  componentDidMount() {
    this.props.getHistoryEvents();
  }

  prepareDataForTable = () => {
    const { historyEventsOnPage } = this.props.historyEventsOnPage;
    const data = [];

    for (var i in historyEventsOnPage) {
      var historyEvent = historyEventsOnPage[i];
      var item = {
        name: historyEvent.name,
        latitude: historyEvent.latitude,
        longitude: historyEvent.longitude,
        year: _.isUndefined(historyEvent.period)
          ? "unknown"
          : historyEvent.period.year,
        month: _.isUndefined(historyEvent.period)
          ? "unknown"
          : historyEvent.period.month,
        date: _.isUndefined(historyEvent.period)
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
  getHistoryEvents: PropTypes.func.isRequired,
  historyEventsOnPage: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  historyEventsOnPage: state.historyEventsOnPage
});

export default connect(
  mapStateToProps,
  { getHistoryEvents }
)(ManageEvents);
