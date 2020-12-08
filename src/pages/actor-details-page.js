import React from "react";
import ActorDetailsRootContainer from "../containers/actor-details-root-container";

import FooterContainer from "../containers/footer-container";
import HeaderMainContainer from "../containers/header-container";

export default function ActorDetailsPage() {
  return (
    <>
      <HeaderMainContainer />
      <ActorDetailsRootContainer />
      <FooterContainer />
    </>
  );
}
