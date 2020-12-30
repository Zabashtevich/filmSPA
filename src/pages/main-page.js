import React, { useContext } from "react";

import BodyMainContainer from "../containers/body-main-page-container";
import FooterContainer from "../containers/footer-container";
import HeaderMainContainer from "../containers/header-container";

export default function MainPage(props) {
  return (
    <>
      <HeaderMainContainer />
      <BodyMainContainer />
      <FooterContainer />
    </>
  );
}
