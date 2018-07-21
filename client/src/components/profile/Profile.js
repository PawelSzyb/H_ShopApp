import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAccount } from "../../actions/profileActions";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";

import { Button } from "reactstrap";

class Profile extends Component {
  onDeleteClick() {
    this.props.deleteAccount();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    let profileContent;
    isAuthenticated ? (
      (profileContent = (
        <div>
          <Link
            to={"/"}
            className="btn btn-secondary"
            style={{ margin: "20px 0" }}
          >
            Cofnij
          </Link>
          <br />
          <Button color="danger" onClick={this.onDeleteClick.bind(this)}>
            USUŃ KONTO
          </Button>
        </div>
      ))
    ) : (
      <Redirect to="/" />
    );
    return <div>{profileContent}</div>;
  }
}

Profile.propTypes = {
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteAccount }
)(Profile);
