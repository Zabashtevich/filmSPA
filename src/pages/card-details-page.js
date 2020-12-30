import React from "react";

import FooterContainer from "../containers/footer-container";
import CardDetailsRootContainer from "../containers/card-details-root-container";
import CardDetailsPanelContainer from "../containers/card-details-panel-container";
import HeaderMainContainer from "../containers/header-container";

export default function CardDetailsPage() {
  return (
    <>
      <HeaderMainContainer />
      <CardDetailsRootContainer />
      <CardDetailsPanelContainer />
      <FooterContainer />
    </>
  );
}
