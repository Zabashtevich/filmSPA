import React, { useContext } from "react";

import HeaderMainContainer from "../containers/header-container";
import BodyMainContainer from "../containers/body-main-page-container";
import FooterContainer from "../containers/footer-container";
import { AuthContext } from "../context/auth-context";

export default function MainPage(props) {
  const { firebase } = useContext(AuthContext);
  console.log(props);
  return (
    <>
      <BodyMainContainer />
      <FooterContainer />
    </>
  );
}
