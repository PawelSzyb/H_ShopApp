import React, { Component } from "react";
import WomenItems from "./WomenItems";
import { connect } from "react-redux";
import { getWomenItems } from "../../actions/itemsActions";
import PropTypes from "prop-types";

import Model1 from "../../img/newArrival/imgModel1.jpg";
import Model2 from "../../img/newArrival/imgModel2.jpg";

class WomenPage extends Component {
  componentDidMount() {
    this.props.getWomenItems();
  }
  render() {
    const images = [Model1, Model2, Model1, Model2, Model1, Model2];

    const { womenItems } = this.props.items;

    let itemContent;
    if (womenItems === (null || undefined)) {
      itemContent = null;
    } else {
      itemContent = <WomenItems images={images} womenItems={womenItems} />;
    }

    return (
      <div style={{ maxWidth: "1050px", margin: "0 auto" }}>{itemContent}</div>
    );
  }
}
WomenPage.propTypes = {
  items: PropTypes.object.isRequired,
  getWomenItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getWomenItems }
)(WomenPage);
