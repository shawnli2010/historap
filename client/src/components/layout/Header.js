import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import QuickAddEvent from "../createOrEditEvent/QuickAddEvent";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.openCreateEventModal = this.openCreateEventModal.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  openCreateEventModal() {
    this.qde.toggle();
  }

  render() {
    return (
      <div>
        <QuickAddEvent ref={instance => (this.qde = instance)} />

        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Historap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.openCreateEventModal}>Quick Add</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Account</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Manage
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Events</DropdownItem>
                  <DropdownItem>Characters</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Other Setting</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
