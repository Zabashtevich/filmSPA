import React from "react";

import HeaderMainContainer from "../../containers/header-main-container";
import BodyMainContainer from "./container/body-main-page-container";
import FooterContainer from "../../containers/footer-container";

export default function MainPage() {
  return (
    <>
      <BodyMainContainer>
        <HeaderMainContainer />
      </BodyMainContainer>
      <FooterContainer />
    </>
  );
}
