import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { toggleLike } from "../../actions/itemsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MenItems extends Component {
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
      <div>
        <Link
          to={"/"}
          className="btn btn-secondary"
          style={{ marginBottom: "20px" }}
        >
          Cofnij
        </Link>
        <div className="row">
          {menItems.map((item, index) => {
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
          })}
        </div>
      </div>
    );
  }
}

MenItems.propTypes = {
  toggleLike: PropTypes.func.isRequired,
  menItems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { toggleLike }
)(MenItems);
