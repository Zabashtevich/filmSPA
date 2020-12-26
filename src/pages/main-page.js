import React, { useContext } from "react";

import BodyMainContainer from "../containers/body-main-page-container";
import FooterContainer from "../containers/footer-container";

export default function MainPage(props) {
  return (
    <>
      <BodyMainContainer />
      <FooterContainer />
    </>
  );
}
