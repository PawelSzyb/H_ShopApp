import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMenItems, getWomenItems } from "../../actions/itemsActions";
import FavoriteItems from "./FavoriteItems";

class FavoritePage extends Component {
  componentDidMount() {
    this.props.getMenItems();
    this.props.getWomenItems();
  }
  render() {
    const { items } = this.props;
    let favoriteContent;
    if ((items.menItems || items.woemnItems) === (undefined || null)) {
      favoriteContent = null;
    } else {
      favoriteContent = <FavoriteItems items={items} />;
    }
    return <div>{favoriteContent}</div>;
  }
}

FavoritePage.propTypes = {
  getWomenItems: PropTypes.func.isRequired,
  getMenItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getMenItems, getWomenItems }
)(FavoritePage);
