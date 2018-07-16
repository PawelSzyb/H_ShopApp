import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

import { getMenItems } from "../../actions/itemsActions";

class FavoriteItems extends Component {
  componentDidMount() {
    this.props.getMenItems();
  }
  onToggleClick(id, item, e) {
    this.props.toggleLike(id);

    const { user } = this.props.auth;
    if (
      item.likes.filter(like => like.user.toString() === user.id).length > 0
    ) {
      e.target.className = "btn btn-primary";
    } else {
      e.target.className = "btn btn-success";
    }
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const menItems = this.props.menItems;
    return (
      <div className="row">
        {/* {isAuthenticated ? (
          menItems.map((item, index) => {
            return (
              <Col key={item._id} xs="9" sm="6" md="4" lg="3">
                <Card className="mb-5">
                  <CardImg
                    top
                    height="285px"
                    src={this.props.images[index]}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardText>{item.nameItem}</CardText>
                    {isAuthenticated ? (
                      <button
                        onClick={this.onToggleClick.bind(this, item._id, item)}
                        style={{ outline: "none" }}
                        className={
                          item.likes.filter(
                            like => like.user.toString() === user.id
                          ).length > 0
                            ? "btn btn-success"
                            : "btn btn-primary"
                        }
                      >
                        Ulubione
                      </button>
                    ) : null}
                  </CardBody>
                </Card>
              </Col>
            );
          }) */}
        {/* ) : ( */}
        {/* <Redirect to="/login" /> */}
        {/* )} */}
        <h1>fav</h1>
      </div>
    );
  }
}
FavoriteItems.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getMenItems }
)(FavoriteItems);
