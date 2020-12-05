import React from "react";

import HeaderMainContainer from "../containers/header-container";
import BodyMainContainer from "../containers/body-main-page-container";
import FooterContainer from "../containers/footer-container";

export default function MainPage() {
  return (
    <>
      <HeaderMainContainer />
      <BodyMainContainer />
      <FooterContainer />
    </>
  );
}
