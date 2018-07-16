import React, { Component } from "react";
import MenItems from "./MenItems";
import { connect } from "react-redux";
import { getMenItems } from "../../actions/itemsActions";
import PropTypes from "prop-types";

import Model3 from "../../img/newArrival/imgModel3.jpg";
import Model4 from "../../img/newArrival/imgModel4.jpg";

class MenPage extends Component {
  componentDidMount() {
    this.props.getMenItems();
  }
  render() {
    const images = [Model3, Model4, Model3, Model4, Model3, Model4];

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
  getMenItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menItem: state.menItem
});

export default connect(
  mapStateToProps,
  { getMenItems }
)(MenPage);
