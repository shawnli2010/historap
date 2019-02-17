import React, { Component } from "react";
import MaterialTable from "material-table";

class ManageEvents extends Component {
  render() {
    return (
      <div>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            { title: "Surname", field: "surname" },
            { title: "Birth Year", field: "birthYear", type: "numeric" },
            {
              title: "Birth Place",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
            }
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: "Zerya Betül",
              surname: "Baran",
              birthYear: 2017,
              birthCity: 34
            }
          ]}
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
      </div>
    );
  }
}

export default ManageEvents;
// ManageEvents.propTypes = {
//   historyEvents: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   historyEvents: state.historyEvents
// });

// export default connect(
//   mapStateToProps,
//   {}
// )(ManageEvents);
