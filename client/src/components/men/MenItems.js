import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { toggleLike } from "../../actions/itemsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MenItems extends Component {
  onToggleClick(id, e) {
    this.props.toggleLike(id);

    const menItems = this.props.menItems;
    console.log(menItems);
    const { isAuthenticated, user } = this.props.auth;
    console.log(
      menItems.map(
        item =>
          item.likes.filter(like => like.user.toString() === user.id).length > 0
      )
    );
    console.log(e.target.);
    if (
      menItems.map(
        item =>
          item.likes.filter(like => like.user.toString() === user.id).length > 0
      )
      // menItems.filter(item =>
      //   item.likes.filter(like => like.user.toString() === user.id)
      // ).length > 0
      // item.likes.filter(like => like.user.toString() === req.user.id)
      //         .length > 0
    ) {
      e.target.className = "btn btn-success";
    } else {
      e.target.className = "btn btn-primary";
    }
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const menItems = this.props.menItems;

    return (
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
                      onClick={this.onToggleClick.bind(this, item._id)}
                      style={{ outline: "none" }}
                      className={
                        // menItems.likes.filter(
                        //   like => like.user.toString() !== user.id
                        // ).length > 0
                        //   ? "btn btn-success"
                        //   : "btn btn-primary"
                        "btn btn-primary"
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
