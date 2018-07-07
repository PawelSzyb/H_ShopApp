import React from "react";
import Model1 from "../../img/newArrival/imgModel1.jpg";
import Model2 from "../../img/newArrival/imgModel2.jpg";
import Model3 from "../../img/newArrival/imgModel3.jpg";
import Model4 from "../../img/newArrival/imgModel4.jpg";
import { Row, Col } from "reactstrap";

import CardGallery from "../common/CardImg";

const NewArrivals = () => {
  return (
    <Row>
      <Col xs="12" sm="6" md="4" lg="3">
        <CardGallery linkText="ZOBACZ WIĘCEJ" to="/ona" src={Model1} />
      </Col>
      <Col xs="12" sm="6" md="4" lg="3">
        <CardGallery linkText="ZOBACZ WIĘCEJ" to="/ona" src={Model2} />
      </Col>
      <Col sm="6" md="4" lg="3">
        <CardGallery linkText="ZOBACZ WIĘCEJ" to="/on" src={Model3} />
      </Col>
      <Col xs="12" sm="6" md="4" lg="3">
        <CardGallery linkText="ZOBACZ WIĘCEJ" to="/on" src={Model4} />
      </Col>
    </Row>
  );
};

export default NewArrivals;
