import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toggleMenLike, toggleWomenLike } from "../../actions/itemsActions";

import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

import Model1 from "../../img/newArrival/imgModel1.jpg";
import Model2 from "../../img/newArrival/imgModel2.jpg";
import Model3 from "../../img/newArrival/imgModel3.jpg";
import Model4 from "../../img/newArrival/imgModel4.jpg";

class FavoriteItems extends Component {
  onMenToggleClick(id, item, e) {
    this.props.toggleMenLike(id);

    const { user } = this.props.auth;
    if (
      item.likes.filter(like => like.user.toString() === user.id).length > 0
    ) {
      e.target.className = "btn btn-primary";
    } else {
      e.target.className = "btn btn-success";
    }
  }
  onWomenToggleClick(id, item, e) {
    this.props.toggleWomenLike(id);

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
    const imagesMen = [Model3, Model4, Model3, Model4, Model3, Model4];
    const imagesWomen = [Model1, Model2, Model1, Model2, Model1, Model2];
    const { isAuthenticated, user } = this.props.auth;
    const { menItems } = this.props.items;
    const { womenItems } = this.props.items;
    // console.log(menItems);
    return (
      <div>
        <Link
          to={"/"}
          className="btn btn-secondary"
          style={{ marginBottom: "20px" }}
        >
          Cofnij
        </Link>
        <h2>Ulubione</h2>
        <hr />
        <div className="row">
          {isAuthenticated && menItems !== undefined
            ? menItems.map((item, index) => {
                if (
                  item.likes.filter(like => like.user.toString() === user.id)
                    .length > 0
                ) {
                  return (
                    <Col key={item._id} xs="9" sm="6" md="4" lg="3">
                      <Card className="mb-5">
                        <CardImg
                          top
                          height="285px"
                          src={imagesMen[index]}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardText>{item.nameItem}</CardText>
                          {isAuthenticated ? (
                            <button
                              onClick={this.onMenToggleClick.bind(
                                this,
                                item._id,
                                item
                              )}
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
                  // );
                } else {
                  null;
                }
              })
            : null}
        </div>
        <hr />
        <div className="row" style={{ marginTop: "50px" }}>
          {isAuthenticated && womenItems !== undefined
            ? womenItems.map((item, index) => {
                if (
                  item.likes.filter(like => like.user.toString() === user.id)
                    .length > 0
                ) {
                  return (
                    <Col key={item._id} xs="9" sm="6" md="4" lg="3">
                      <Card className="mb-5">
                        <CardImg
                          top
                          height="285px"
                          src={imagesWomen[index]}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardText>{item.nameItem}</CardText>
                          {isAuthenticated ? (
                            <button
                              onClick={this.onWomenToggleClick.bind(
                                this,
                                item._id,
                                item
                              )}
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
                  // );
                } else {
                  null;
                }
              })
            : null}
        </div>
      </div>
    );
  }
}
FavoriteItems.propTypes = {
  auth: PropTypes.object.isRequired,
  toggleMenLike: PropTypes.func.isRequired,
  toggleWomenLike: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { toggleMenLike, toggleWomenLike }
)(FavoriteItems);
