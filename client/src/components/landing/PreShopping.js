import React from "react";
import { Link } from "react-router-dom";

import "./Shopping.css";

const PreShopping = () => {
  return (
    <div className=" wrap-content mb-4">
      <p className="font-weight-bold">LETNIA WYPRZEDAŻ - TERAZ DO</p>
      <h3 className="font-weight-bold">60% RABATU</h3>
      <p className="font-weight-bold">ONLINE I W SKLEPACH STACJONARNYCH</p>
      <p>Oferta obowiązuje do wyczerpania zapasów</p>
      <div className="d.flex mr-3 ">
        <Link
          name="on"
          className="text-white links mr-5"
          color="secondary"
          to="/on"
        >
          On
        </Link>
        <Link
          name="on"
          className="text-white links mr-5"
          color="secondary"
          to="/ona"
        >
          Ona
        </Link>
        <Link
          name="on"
          className="text-white links"
          color="secondary"
          to="/dziecko"
        >
          Dziecko
        </Link>
      </div>
    </div>
  );
};

export default PreShopping;
