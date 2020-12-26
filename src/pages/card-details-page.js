import React from "react";

import HeaderMainContainer from "../containers/header-container";
import FooterContainer from "../containers/footer-container";
import CardDetailsRootContainer from "../containers/card-details-root-container";
import CardDetailsPanelContainer from "../containers/card-details-panel-container";

export default function CardDetailsPage({ user }) {
  return (
    <>
      <CardDetailsRootContainer />
      <CardDetailsPanelContainer user={user} />
      <FooterContainer />
    </>
  );
}
