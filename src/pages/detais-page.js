import React from "react";

import HeaderMainContainer from "../containers/header-container";
import FooterContainer from "../containers/footer-container";
import DetailsContainer from "../containers/details/details-container";

export default function DetailsPage() {
  return (
    <>
      <HeaderMainContainer />
      <DetailsContainer />
      <FooterContainer />
    </>
  );
}
