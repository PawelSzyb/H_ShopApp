import React, { Component } from "react";
import { connect } from "react-redux";
import { getMenItems } from "../../actions/itemsActions";
import FavoriteItems from "./FavoriteItems";

class FavoritePage extends Component {
  componentDidMount() {
    this.props.getMenItems();
  }
  render() {
    return (
      <div>
        <FavoriteItems />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  menItem: state.menItem
});

export default connect(
  mapStateToProps,
  { getMenItems }
)(FavoritePage);
