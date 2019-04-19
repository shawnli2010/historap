import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { createHistoryEvent } from "../../actions/historyEventActions";

class EventGroupSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      latitude: "",
      longitude: "",
      location: "",
      locationName: "",
      period: "",
      description: ""
    };

    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm() {
    const eventData = {
      name: this.state.name,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      location: this.state.location,
      locationName: this.state.locationName,
      period: this.state.period,
      description: this.state.description,
      isOnMap: true
    };

    this.props.createHistoryEvent(eventData, this.props.history);
    this.props.onClose();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} className={this.props.className}>
          <ModalHeader>Create Event</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="latitude">Latitude</Label>
                <Input
                  type="number"
                  name="latitude"
                  id="latitude"
                  placeholder="Latitude"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="longitude">Longitude</Label>
                <Input
                  type="number"
                  name="longitude"
                  id="longitude"
                  placeholder="Longitude"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="locationName">Location Name</Label>
                <Input
                  type="text"
                  name="locationName"
                  id="locationName"
                  placeholder="Location Name"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="period">Period</Label>
                <Input
                  type="date"
                  name="period"
                  id="period"
                  placeholder="Period"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  onChange={this.onChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submitForm}>
              Create
            </Button>
            <Button color="secondary" onClick={this.props.onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

// EventGroupSelection.propTypes = {
//   profile: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   profile: state.profile,
//   errors: state.errors
// });

// export default connect(
//   null,
//   { createHistoryEvent }
// )(withRouter(EventGroupSelection));

export default withRouter(
  connect(
    null,
    { createHistoryEvent }
  )(EventGroupSelection)
);
