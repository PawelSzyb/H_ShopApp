import React from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const PrimaryMenu = () => {
  return (
    <div className="">
      <Nav className="nav justify-content-center">
        <NavItem>
          <Link
            name="on"
            className="mr-5 btn btn-outline-secondary"
            color="secondary"
            to="/on"
          >
            On
          </Link>
        </NavItem>
        <NavItem>
          <Link
            name="on"
            className="mr-5 btn btn-outline-secondary"
            color="secondary"
            to="/ona"
          >
            Ona
          </Link>
        </NavItem>
        <NavItem>
          <Link
            name="on"
            className="btn btn-outline-secondary"
            color="secondary"
            to="/dziecko"
          >
            Dziecko
          </Link>
        </NavItem>
      </Nav>
      <hr className="mb-5" />
    </div>
  );
};

export default PrimaryMenu;
