import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import PropTypes from "prop-types";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#" onClick={this.onLogoutClick.bind(this)}>
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="Musisz mieć podłączony Gravatar do swojego emaila aby móc wyświetlić obraz"
            />
            Wyloguj
          </NavLink>
        </NavItem>
        <NavItem>
          <Link to={"/favorite"} className="nav-link">
            Ulubione
          </Link>
        </NavItem>
      </Nav>
    );
    const guestLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to={"/register"} className="nav-link">
            Rejestracja
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"/login"} className="nav-link">
            Zaloguj się
          </Link>
        </NavItem>
      </Nav>
    );
    return (
      <div>
        <Navbar
          dark
          expand="md"
          className="mb-4"
          style={{ backgroundColor: "#222" }}
        >
          <Container>
            <NavbarBrand href="/">H_Shop</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {isAuthenticated ? authLinks : guestLinks}
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
AppNavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(AppNavBar);
