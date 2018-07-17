import React from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const CardGallery = props => {
  return (
    <Card style={{ flex: "auto", width: "225px" }} className="mb-5">
      <CardImg
        top
        height="285px"
        src={props.src}
        alt="Card image cap"
        style={{ width: "100%", height: "auto" }}
      />
      <CardBody>
        <CardText>Nowe produkty w naszej ofercie</CardText>
        <Link
          className="text-dark"
          style={{ textDecoration: "underline" }}
          to={props.to}
        >
          {props.linkText}
        </Link>
      </CardBody>
    </Card>
  );
};

export default CardGallery;
