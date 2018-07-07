import React from "react";
import PrimaryMenu from "./PrimaryMenu";
import PreShopping from "./PreShopping";
import SpecialPrize from "./SpecialPrize";
import NewArrivals from "./NewArrivals";

const LandingPage = () => {
  return (
    <div>
      <PrimaryMenu />
      <PreShopping />
      <SpecialPrize />
      <NewArrivals />
    </div>
  );
};
export default LandingPage;
