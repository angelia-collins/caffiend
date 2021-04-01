import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";
import Logo from "../../assets/Logos/Caffiend-logo.png";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Container className="themed-container" fluid={"true"}>
      <Navbar light expand="md" className="navPoop">
        <Row>
          <Col lg={{ offset: 4 }}>
            <NavbarBrand>
              <a href="/home"> 
              <img src={Logo} alt="caffiend logo" style={{ width: "200px" }} />
              </a>
            </NavbarBrand>
          </Col>
          <Col>
          {isAuthenticated && (
            <NavbarToggler onClick={toggle} />
          )}
          </Col>
          <Col md={"6"} lg={"3"}>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-5" navbar>
                {isAuthenticated && (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav >
                      log
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        tag={NavLink}
                        href="/todays-intake"
                        className="text-center"
                      >
                        consumption
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        tag={NavLink}
                        href="/add-new"
                        className="text-center"
                      >
                        inventory
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
                {isAuthenticated && (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav >
                      view
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        tag={NavLink}
                        href="/consumption-report"
                        className="text-center"
                      >
                        consumption report
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        tag={NavLink}
                        href="/inventory-report"
                        className="text-center"
                      >
                        inventory report
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        tag={NavLink}
                        href="/budget-report"
                        className="text-center"
                      >
                        budget report
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
                {isAuthenticated && (
                  <NavItem>
                    <NavLink
                      tag={NavLink}
                      href="/settings"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      settings
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
              <Nav className="d-none d-md-block" navbar>
                {isAuthenticated && (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret id="profileDropDown">
                      <img
                        src={user.picture}
                        alt="Profile"
                        className="nav-user-profile rounded-circle"
                        width="50"
                      />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem header>{user.name}</DropdownItem>
                      <DropdownItem
                        tag={NavLink}
                        href="/profile"
                        className="dropdown-profile"
                        activeClassName="router-link-exact-active"
                      >
                        <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        id="qsLogoutBtn"
                        onClick={() => logoutWithRedirect()}
                      >
                        <FontAwesomeIcon icon="power-off" className="mr-3" />{" "}
                        Log out
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
              </Nav>
            </Collapse>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
};

export default NavBar;
