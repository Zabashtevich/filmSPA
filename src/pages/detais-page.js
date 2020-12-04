import React from "react";

import HeaderMainContainer from "../containers/header-container";
import FooterContainer from "../containers/footer-container";
import DetailsContainer from "../containers/details/details-container";
import DetailsPanelContainer from "../containers/details/auxillary-containers/details-panel-container";

export default function DetailsPage() {
  return (
    <>
      <HeaderMainContainer />
      <DetailsContainer />
      <DetailsPanelContainer />
      <FooterContainer />
    </>
  );
}
