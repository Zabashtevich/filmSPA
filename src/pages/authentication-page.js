import React from "react";

import AuthenticationPageContainer from "../containers/authentication-page-container";
import HeaderMainContainer from "../containers/header-container";

export default function AuthenticationPage() {
  return (
    <>
      <HeaderMainContainer />
      <AuthenticationPageContainer />
    </>
  );
}
