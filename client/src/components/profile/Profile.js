import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAccount } from "../../actions/profileActions";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

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
        <Button color="danger" onClick={this.onDeleteClick.bind(this)}>
          USUŃ KONTO
        </Button>
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
