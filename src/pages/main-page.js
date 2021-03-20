import React, { useEffect } from "react";

import {
  FooterContainer,
  HeaderContainer,
  MainContainer,
  ModalContainer,
  UtilityContainer,
} from "../containers";
import { useUtilityContext } from "../context";

export default function MainPage() {
  const [, { showErrorUtility }] = useUtilityContext();
  useEffect(() => {
    showErrorUtility(["hahahaha", "hehehehe"]);
  }, []);
  return (
    <>
      <HeaderContainer />
      <UtilityContainer />
      <ModalContainer />
      <MainContainer />
      <FooterContainer />
    </>
  );
}
