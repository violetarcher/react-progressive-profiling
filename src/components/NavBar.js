import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md">
        <Container class="nav-container-items">
          {/* <NavbarBrand className="logo" /> */}
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  <span className="navarrow">{'>'}</span> About Us
                </NavLink>
              </NavItem>
              {isAuthenticated && (
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/external-api"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    <span className="navarrow">{'>'}</span> External (FGA) API
                  </NavLink>
                </NavItem>
              )}
              {/* Private-scoped API */}
              {isAuthenticated && (
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/scoped-api"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    <span className="navarrow">{'>'}</span> Scoped API
                  </NavLink>
                </NavItem>
              )}
              {/* arengu link */}
              {/* {isAuthenticated && (
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/arengu"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Arengu
                  </NavLink>
                </NavItem>
              )} */}
              {/* find a doctor */}
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to={{ pathname: 'http://localhost:3000/' }}
                  target="_blank"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  <span className="navarrow">{'>'}</span> Services
                </NavLink>
              </NavItem>
              {/* Services*/}
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to={{ pathname: 'http://localhost:3000/' }}
                  target="_blank"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  <span className="navarrow">{'>'}</span> Pricing
                </NavLink>
              </NavItem>
              {/* Giving */}
              {/* <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to={{pathname: "http://localhost:3000/"}} 
                    target="_blank"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    <span className="navarrow">{">"}</span> Scheduling
                  </NavLink>
                </NavItem> */}
              {/* Careers */}
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to={{ pathname: 'http://localhost:3000/' }}
                  target="_blank"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  <span className="navarrow">{'>'}</span> Customers
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/protected"
                  activeClassName="router-link-exact-active"
                >
                  <span className="navarrow">{'>'}</span> Protected
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/dashboard"
                  activeClassName="router-link-exact-active"
                >
                  <span className="navarrow">{'>'}</span> Dashboard
                </NavLink>
              </NavItem>
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
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="user" className="mr-3" />
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
