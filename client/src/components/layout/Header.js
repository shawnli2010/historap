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

    this.toggleQuickAddModal = this.toggleQuickAddModal.bind(this);
    this.state = {
      isQuickAddOpen: false
    };
  }

  toggleQuickAddModal() {
    this.setState({
      isQuickAddOpen: !this.state.isQuickAddOpen
    });
  }

  render() {
    return (
      <div>
        <QuickAddEvent
          isOpen={this.state.isQuickAddOpen}
          onClose={this.toggleQuickAddModal}
        />

        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Historap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggleQuickAddModal}>Quick Add</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Account</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Manage
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" href="/manage-events">
                    Events
                  </DropdownItem>
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
