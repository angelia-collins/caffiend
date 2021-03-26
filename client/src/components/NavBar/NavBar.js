import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";
import Logo from "../../assets/Logos/Caffiened-logo.png";

import {
  Button,
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
  Row
} from 'reactstrap';

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Container className="themed-container" fluid={"true"}>
      <Navbar light expand="md" className="navPoop">
          <Row>
            <Col lg={{offset: 2}}>
            <NavbarBrand><img src={Logo} alt="caffiend logo" style={{width: "200px"}}/></NavbarBrand>
            </Col>
            <Col>
            <NavbarToggler onClick={toggle} />
            </Col>
            {/* <Row> */}
            <Col md={"7"} lg={"4"}>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuthenticated && (
                <NavItem>
                  <NavLink
                    tag={NavLink}
                    href="/todays-intake"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    CONSUME
                  </NavLink>
                </NavItem>
              )}
              {isAuthenticated && (
                <NavItem>
                  <NavLink
                    tag={NavLink}
                    href="/add-new"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    INVENTORY
                  </NavLink>
                </NavItem>
              )}
              {isAuthenticated && (
                <NavItem>
                  <NavLink
                    tag={NavLink}
                    href="/budget"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    BUDGET
                  </NavLink>
                </NavItem>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}
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
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log out
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