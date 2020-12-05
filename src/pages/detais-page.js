import React from "react";

import HeaderMainContainer from "../containers/header-container";
import FooterContainer from "../containers/footer-container";
import DetailsRootContainer from "../containers/details-root-container";
import DetailsPanelContainer from "../containers/details-panel-container";

export default function DetailsPage() {
  return (
    <>
      <HeaderMainContainer />
      <DetailsRootContainer />
      <DetailsPanelContainer />
      <FooterContainer />
    </>
  );
}
