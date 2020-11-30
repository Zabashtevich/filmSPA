import React from "react";

import HeaderMainContainer from "../containers/header-container";
import FooterContainer from "../containers/footer-container";
import CardDetailsContainer from "../containers/card-details/card-details-container";

export default function CardDetails() {
  return (
    <>
      <HeaderMainContainer />
      <CardDetailsContainer />
      <FooterContainer />
    </>
  );
}
