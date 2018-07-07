import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CardGallery from "../common/CardImg";

import Model1 from "../../img/newArrival/imgModel1.jpg";
import Model2 from "../../img/newArrival/imgModel2.jpg";
import Model3 from "../../img/newArrival/imgModel3.jpg";
import Model4 from "../../img/newArrival/imgModel4.jpg";

export default class MenPage extends Component {
  //<CardGallery to="/ona" src={Model3} />
  render() {
    const images = [Model1, Model2, Model3, Model4, Model1, Model2];

    return (
      <Row>
        {images.map(image => (
          <Col xs="12" sm="6" md="4" lg="3">
            <CardGallery to="/ona" src={image} />
          </Col>
        ))}
      </Row>
    );
  }
}
