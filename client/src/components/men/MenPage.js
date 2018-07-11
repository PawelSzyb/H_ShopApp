import React, { Component } from "react";
import MenItems from "./MenItems";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemsActions";
import PropTypes from "prop-types";

import Model1 from "../../img/newArrival/imgModel1.jpg";
import Model2 from "../../img/newArrival/imgModel2.jpg";
import Model3 from "../../img/newArrival/imgModel3.jpg";
import Model4 from "../../img/newArrival/imgModel4.jpg";

class MenPage extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const images = [Model1, Model2, Model3, Model4, Model1, Model2];

    const { menItems } = this.props.menItem;

    let itemContent;
    if (menItems === (null || undefined)) {
      itemContent = null;
    } else {
      itemContent = <MenItems images={images} menItems={menItems} />;
    }

    return (
      <div style={{ maxWidth: "1050px", margin: "0 auto" }}>{itemContent}</div>
    );
  }
}
MenPage.propTypes = {
  menItem: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menItem: state.menItem
});

export default connect(
  mapStateToProps,
  { getItems }
)(MenPage);
